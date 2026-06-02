// Master script: Push all 4 scheduled articles to Sanity in one go
// They will auto-publish based on their publishedAt dates

import './article-1.mjs';

setTimeout(() => import('./article-2.mjs'), 3000);
setTimeout(() => import('./article-3.mjs'), 6000);
setTimeout(() => import('./article-4.mjs'), 9000);
