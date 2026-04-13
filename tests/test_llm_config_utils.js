const assert = require('node:assert/strict');

const {
  OPENAI_COMPATIBLE_PRESETS,
  normalizeBaseUrlForStorage,
  buildChatCompletionsEndpoint,
  sanitizeModelList,
  resolveChatModels,
  resolveSummaryLLM,
  inferProviderType,
  getOpenAICompatiblePreset,
  inferChatApiProfile,
  shouldUseXApiKeyHeader,
  buildStreamingChatPayload,
  buildConnectivityTestPayload,
} = require('../app/llm-config-utils.js');

function testNormalizeBaseUrlForStorage() {
  assert.equal(
    normalizeBaseUrlForStorage('https://api.example.com/v1/chat/completions'),
    'https://api.example.com/v1',
  );
  assert.equal(
    normalizeBaseUrlForStorage('https://api.example.com/v1/'),
    'https://api.example.com/v1',
  );
}

function testBuildChatCompletionsEndpoint() {
  assert.equal(
    buildChatCompletionsEndpoint('https://api.example.com/v1'),
    'https://api.example.com/v1/chat/completions',
  );
  assert.equal(
    buildChatCompletionsEndpoint('https://api.example.com/custom-root'),
    'https://api.example.com/custom-root/v1/chat/completions',
  );
}

function testSanitizeModelList() {
  assert.deepEqual(
    sanitizeModelList(['gpt-4o', ' gpt-4o ', 'qwen-max', 'glm-4.5', 'extra'], 3),
    ['gpt-4o', 'qwen-max', 'glm-4.5'],
  );
}

function testResolveChatModelsAndSummary() {
  const secret = {
    summarizedLLM: {
      apiKey: 'sk-summary',
      baseUrl: 'https://api.example.com/v1',
      model: 'gpt-4.1-mini',
    },
    chatLLMs: [
      {
        apiKey: 'sk-chat',
        baseUrl: 'https://api.example.com/v1/',
        models: ['gpt-4.1-mini', 'claude-sonnet-4'],
      },
    ],
  };

  const chatModels = resolveChatModels(secret);
  assert.equal(chatModels.length, 2);
  assert.deepEqual(chatModels.map((item) => item.name), [
    'gpt-4.1-mini',
    'claude-sonnet-4',
  ]);

  const summary = resolveSummaryLLM(secret);
  assert.equal(summary.model, 'gpt-4.1-mini');
  assert.equal(summary.baseUrl, 'https://api.example.com/v1');
}

function testInferProviderType() {
  assert.equal(
    inferProviderType({
      summarizedLLM: {
        apiKey: 'sk',
        baseUrl: 'https://api.bltcy.ai/v1',
        model: 'gemini-3-flash-preview-thinking-1000',
      },
    }),
    'plato',
  );
  assert.equal(
    inferProviderType({
      summarizedLLM: {
        apiKey: 'sk',
        baseUrl: 'https://api.openai.com/v1',
        model: 'gpt-4.1-mini',
      },
    }),
    'openai-compatible',
  );
}

function testGetOpenAICompatiblePreset() {
  const cases = [
    {
      key: 'deepseek',
      expected: {
        key: 'deepseek',
        label: 'DeepSeek 官方',
        baseUrl: 'https://api.deepseek.com',
        models: ['deepseek-chat', 'deepseek-reasoner'],
        profile: 'deepseek',
        supportsReranker: false,
        rerankerModel: '',
      },
    },
    {
      key: 'glm',
      expected: {
        key: 'glm',
        label: 'GLM Coding Plan',
        baseUrl: 'https://open.bigmodel.cn/api/coding/paas/v4',
        models: [
          'glm-5.1',
          'glm-5',
          'glm-4.7',
          'glm-4.7-flash',
          'glm-4.7-flashx',
          'glm-4.6',
          'glm-4.5-air',
          'glm-4.5-airx',
          'glm-4.5-flash',
        ],
        profile: 'generic-openai',
        supportsReranker: false,
        rerankerModel: '',
      },
    },
    {
      key: 'minimax',
      expected: {
        key: 'minimax',
        label: 'MiniMax Coding Plan',
        baseUrl: 'https://api.minimaxi.com/v1',
        models: ['MiniMax-M2.5', 'MiniMax-M2.7', 'MiniMax-M2.1'],
        profile: 'generic-openai',
        supportsReranker: false,
        rerankerModel: '',
      },
    },
    {
      key: 'kimi',
      expected: {
        key: 'kimi',
        label: 'Kimi 编程预设',
        baseUrl: 'https://api.moonshot.ai/v1',
        models: ['kimi-k2.5', 'kimi-k2-turbo-preview', 'kimi-k2-thinking'],
        profile: 'generic-openai',
        supportsReranker: false,
        rerankerModel: '',
      },
    },
    {
      key: 'openai',
      expected: {
        key: 'openai',
        label: 'OpenAI 官方',
        baseUrl: 'https://api.openai.com/v1',
        models: ['gpt-4.1-mini', 'gpt-4.1'],
        profile: 'generic-openai',
        supportsReranker: false,
        rerankerModel: '',
      },
    },
    {
      key: 'blt',
      expected: {
        key: 'blt',
        label: '柏拉图 BLTCY',
        baseUrl: 'https://api.bltcy.ai/v1',
        models: [
          'gemini-3-flash-preview-thinking-1000',
          'deepseek-v3.2',
          'gpt-5-chat',
          'gemini-3-pro-preview',
        ],
        profile: 'plato',
        supportsReranker: true,
        rerankerModel: 'qwen3-reranker-4b',
      },
    },
  ];

  cases.forEach(({ key, expected }) => {
    assert.deepEqual(getOpenAICompatiblePreset(key), expected);
    assert.equal(
      inferChatApiProfile(expected.baseUrl, expected.models[0]),
      expected.profile,
    );
  });
}

function testInferChatApiProfile() {
  assert.equal(
    inferChatApiProfile('https://api.openai.com/v1', 'gpt-4.1-mini'),
    'generic-openai',
  );
  assert.equal(
    inferChatApiProfile('https://api.unknown-provider.example/v1', 'deepseek-chat'),
    'deepseek',
  );
}

function testBltPresetMetadata() {
  assert.ok(OPENAI_COMPATIBLE_PRESETS.blt);
  assert.equal(OPENAI_COMPATIBLE_PRESETS.blt.profile, 'plato');
  assert.equal(OPENAI_COMPATIBLE_PRESETS.blt.supportsReranker, true);
}

function testShouldUseXApiKeyHeader() {
  assert.equal(
    shouldUseXApiKeyHeader({
      baseUrl: 'https://api.minimaxi.com/v1',
      model: 'MiniMax-M2.5',
    }),
    false,
  );
  assert.equal(
    shouldUseXApiKeyHeader({
      baseUrl: 'https://api.openai.com/v1',
      model: 'gpt-4.1-mini',
    }),
    true,
  );
}

function testBuildStreamingChatPayload() {
  assert.deepEqual(
    buildStreamingChatPayload({
      baseUrl: 'https://api.deepseek.com',
      model: 'deepseek-chat',
      messages: [{ role: 'user', content: 'hi' }],
    }),
    {
      model: 'deepseek-chat',
      messages: [{ role: 'user', content: 'hi' }],
      stream: true,
    },
  );

  assert.deepEqual(
    buildStreamingChatPayload({
      baseUrl: 'https://api.deepseek.com',
      model: 'deepseek-reasoner',
      messages: [{ role: 'user', content: 'hi' }],
    }),
    {
      model: 'deepseek-reasoner',
      messages: [{ role: 'user', content: 'hi' }],
      stream: true,
      thinking: { type: 'enabled' },
    },
  );

  assert.deepEqual(
    buildStreamingChatPayload({
      baseUrl: 'https://api.bltcy.ai/v1',
      model: 'gpt-5-chat',
      messages: [{ role: 'user', content: 'hi' }],
    }),
    {
      model: 'gpt-5-chat',
      messages: [{ role: 'user', content: 'hi' }],
      stream: true,
      reasoning: { effort: 'medium' },
      extra_body: { return_reasoning: true },
    },
  );
}

function testBuildConnectivityTestPayload() {
  assert.deepEqual(
    buildConnectivityTestPayload({
      baseUrl: 'https://api.deepseek.com',
      model: 'deepseek-reasoner',
    }),
    {
      model: 'deepseek-reasoner',
      messages: [
        { role: 'system', content: 'Reply with exactly: hello world' },
        { role: 'user', content: 'hello world' },
      ],
      temperature: 0,
      max_tokens: 2048,
      max_completion_tokens: 2048,
      thinking: { type: 'disabled' },
    },
  );

  assert.deepEqual(
    buildConnectivityTestPayload({
      baseUrl: 'https://api.deepseek.com',
      model: 'deepseek-chat',
    }),
    {
      model: 'deepseek-chat',
      messages: [
        { role: 'system', content: 'Reply with exactly: hello world' },
        { role: 'user', content: 'hello world' },
      ],
      temperature: 0,
      max_tokens: 2048,
    },
  );

  assert.deepEqual(
    buildConnectivityTestPayload({
      baseUrl: 'https://open.bigmodel.cn/api/coding/paas/v4',
      model: 'glm-5.1',
    }),
    {
      model: 'glm-5.1',
      messages: [
        { role: 'system', content: 'Reply with exactly: hello world' },
        { role: 'user', content: 'hello world' },
      ],
      temperature: 0,
      max_tokens: 2048,
      max_completion_tokens: 2048,
      thinking: { type: 'disabled' },
    },
  );
}

testNormalizeBaseUrlForStorage();
testBuildChatCompletionsEndpoint();
testSanitizeModelList();
testResolveChatModelsAndSummary();
testInferProviderType();
testGetOpenAICompatiblePreset();
testInferChatApiProfile();
testBltPresetMetadata();
testShouldUseXApiKeyHeader();
testBuildStreamingChatPayload();
testBuildConnectivityTestPayload();

console.log('llm config utils tests passed');
