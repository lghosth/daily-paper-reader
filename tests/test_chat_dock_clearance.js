'use strict';

const assert = require('assert');
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const css = fs.readFileSync(path.join(root, 'app/app.css'), 'utf8');
const chatJs = fs.readFileSync(path.join(root, 'app/chat.discussion.js'), 'utf8');

// CSS: dock clearance tokens must exist and be used by the fixed chat dock.
assert.match(css, /--dpr-chat-dock-mask-height:\s*135px/);
assert.match(css, /--dpr-chat-dock-fade-height:\s*40px/);
assert.match(css, /--dpr-chat-dock-padding:\s*220px/);
assert.match(css, /#paper-chat-container\s*\{[\s\S]*?padding-bottom:\s*var\(--dpr-chat-dock-padding\)/);
assert.match(css, /#paper-chat-container::before\s*\{[\s\S]*?height:\s*var\(--dpr-chat-dock-mask-height\)/);
assert.match(css, /#paper-chat-container::after\s*\{[\s\S]*?bottom:\s*var\(--dpr-chat-dock-mask-height\)/);
assert.match(css, /#paper-chat-container::after\s*\{[\s\S]*?height:\s*var\(--dpr-chat-dock-fade-height\)/);

// Mobile override keeps a larger padding so the dock never covers final chat text.
assert.match(
  css,
  /@media[^{]*max-width:\s*1023px[\s\S]*?--dpr-chat-dock-padding:\s*240px/,
);

// Padding must remain strictly larger than mask + fade, otherwise the last
// assistant message can sit under the fixed composer / white mask.
const desktopPad = Number((css.match(/--dpr-chat-dock-padding:\s*(\d+)px/) || [])[1]);
const desktopMask = Number((css.match(/--dpr-chat-dock-mask-height:\s*(\d+)px/) || [])[1]);
const desktopFade = Number((css.match(/--dpr-chat-dock-fade-height:\s*(\d+)px/) || [])[1]);
assert.ok(desktopPad > desktopMask + desktopFade, 'desktop dock padding must clear mask+fade');

// JS: auto-scroll must reserve the dock clearance instead of scrolling to raw document bottom.
assert.match(chatJs, /const getChatDockClearance\s*=\s*\(\)\s*=>/);
assert.match(chatJs, /const isNearPageBottom\s*=\s*\(/);
assert.match(chatJs, /const scrollPageToChatBottom\s*=\s*\(/);
assert.match(chatJs, /docHeight - scrollTop - windowHeight - clearance/);
assert.match(chatJs, /docHeight - windowHeight - clearance/);
assert.match(chatJs, /scrollPageToChatBottom\('smooth'\)/);
assert.match(chatJs, /applyAnswerView\(\);\s*\n\s*scrollToBottomIfNeeded\(\);/);

// Regression: do not scroll to raw document bottom while chat dock is fixed.
assert.doesNotMatch(
  chatJs,
  /window\.scrollTo\(\{\s*top:\s*document\.documentElement\.scrollHeight/,
);

console.log('test_chat_dock_clearance.js: ok');
