// Font configurations with library information
const fonts = [
    // Google Fonts - Variable fonts
    {
        family: 'Inter',
        library: 'google',
        variants: [
            { name: 'Variable (100-900)', value: "'Inter', sans-serif", isVariable: true, minWeight: 100, maxWeight: 900 }
        ]
    },
    {
        family: 'Newsreader',
        library: 'google',
        variants: [
            { name: 'Variable (200-800)', value: "'Newsreader', serif", isVariable: true, minWeight: 200, maxWeight: 800 }
        ]
    },
    {
        family: 'Instrument Serif',
        library: 'google',
        variants: [
            { name: 'Regular (400)', value: "'Instrument Serif', serif", weight: 400 },
            { name: 'Italic (400)', value: "'Instrument Serif', serif", weight: 400, style: 'italic' }
        ]
    },
    // Google Fonts - Sans Serif
    {
        family: 'Roboto',
        library: 'google',
        variants: [
            { name: 'Thin (100)', value: "'Roboto', sans-serif", weight: 100 },
            { name: 'Light (300)', value: "'Roboto', sans-serif", weight: 300 },
            { name: 'Regular (400)', value: "'Roboto', sans-serif", weight: 400 },
            { name: 'Medium (500)', value: "'Roboto', sans-serif", weight: 500 },
            { name: 'Bold (700)', value: "'Roboto', sans-serif", weight: 700 },
            { name: 'Black (900)', value: "'Roboto', sans-serif", weight: 900 }
        ]
    },
    {
        family: 'Open Sans',
        library: 'google',
        variants: [
            { name: 'Variable (300-800)', value: "'Open Sans', sans-serif", isVariable: true, minWeight: 300, maxWeight: 800 }
        ]
    },
    {
        family: 'Lato',
        library: 'google',
        variants: [
            { name: 'Thin (100)', value: "'Lato', sans-serif", weight: 100 },
            { name: 'Light (300)', value: "'Lato', sans-serif", weight: 300 },
            { name: 'Regular (400)', value: "'Lato', sans-serif", weight: 400 },
            { name: 'Bold (700)', value: "'Lato', sans-serif", weight: 700 },
            { name: 'Black (900)', value: "'Lato', sans-serif", weight: 900 }
        ]
    },
    {
        family: 'Montserrat',
        library: 'google',
        variants: [
            { name: 'Variable (100-900)', value: "'Montserrat', sans-serif", isVariable: true, minWeight: 100, maxWeight: 900 }
        ]
    },
    {
        family: 'Poppins',
        library: 'google',
        variants: [
            { name: 'Thin (100)', value: "'Poppins', sans-serif", weight: 100 },
            { name: 'ExtraLight (200)', value: "'Poppins', sans-serif", weight: 200 },
            { name: 'Light (300)', value: "'Poppins', sans-serif", weight: 300 },
            { name: 'Regular (400)', value: "'Poppins', sans-serif", weight: 400 },
            { name: 'Medium (500)', value: "'Poppins', sans-serif", weight: 500 },
            { name: 'SemiBold (600)', value: "'Poppins', sans-serif", weight: 600 },
            { name: 'Bold (700)', value: "'Poppins', sans-serif", weight: 700 },
            { name: 'ExtraBold (800)', value: "'Poppins', sans-serif", weight: 800 },
            { name: 'Black (900)', value: "'Poppins', sans-serif", weight: 900 }
        ]
    },
    {
        family: 'Source Sans 3',
        library: 'google',
        variants: [
            { name: 'Variable (200-900)', value: "'Source Sans 3', sans-serif", isVariable: true, minWeight: 200, maxWeight: 900 }
        ]
    },
    {
        family: 'Raleway',
        library: 'google',
        variants: [
            { name: 'Variable (100-900)', value: "'Raleway', sans-serif", isVariable: true, minWeight: 100, maxWeight: 900 }
        ]
    },
    {
        family: 'Oswald',
        library: 'google',
        variants: [
            { name: 'Variable (200-700)', value: "'Oswald', sans-serif", isVariable: true, minWeight: 200, maxWeight: 700 }
        ]
    },
    {
        family: 'Nunito',
        library: 'google',
        variants: [
            { name: 'Variable (200-1000)', value: "'Nunito', sans-serif", isVariable: true, minWeight: 200, maxWeight: 1000 }
        ]
    },
    {
        family: 'Ubuntu',
        library: 'google',
        variants: [
            { name: 'Light (300)', value: "'Ubuntu', sans-serif", weight: 300 },
            { name: 'Regular (400)', value: "'Ubuntu', sans-serif", weight: 400 },
            { name: 'Medium (500)', value: "'Ubuntu', sans-serif", weight: 500 },
            { name: 'Bold (700)', value: "'Ubuntu', sans-serif", weight: 700 }
        ]
    },
    {
        family: 'Work Sans',
        library: 'google',
        variants: [
            { name: 'Variable (100-900)', value: "'Work Sans', sans-serif", isVariable: true, minWeight: 100, maxWeight: 900 }
        ]
    },
    {
        family: 'DM Sans',
        library: 'google',
        variants: [
            { name: 'Variable (100-1000)', value: "'DM Sans', sans-serif", isVariable: true, minWeight: 100, maxWeight: 1000 }
        ]
    },
    // Google Fonts - Serif
    {
        family: 'Playfair Display',
        library: 'google',
        variants: [
            { name: 'Variable (400-900)', value: "'Playfair Display', serif", isVariable: true, minWeight: 400, maxWeight: 900 }
        ]
    },
    {
        family: 'Merriweather',
        library: 'google',
        variants: [
            { name: 'Light (300)', value: "'Merriweather', serif", weight: 300 },
            { name: 'Regular (400)', value: "'Merriweather', serif", weight: 400 },
            { name: 'Bold (700)', value: "'Merriweather', serif", weight: 700 },
            { name: 'Black (900)', value: "'Merriweather', serif", weight: 900 }
        ]
    },
    {
        family: 'Crimson Text',
        library: 'google',
        variants: [
            { name: 'Regular (400)', value: "'Crimson Text', serif", weight: 400 },
            { name: 'SemiBold (600)', value: "'Crimson Text', serif", weight: 600 },
            { name: 'Bold (700)', value: "'Crimson Text', serif", weight: 700 }
        ]
    },
    {
        family: 'Lora',
        library: 'google',
        variants: [
            { name: 'Variable (400-700)', value: "'Lora', serif", isVariable: true, minWeight: 400, maxWeight: 700 }
        ]
    },
    {
        family: 'Source Serif 4',
        library: 'google',
        variants: [
            { name: 'Variable (200-900)', value: "'Source Serif 4', serif", isVariable: true, minWeight: 200, maxWeight: 900 }
        ]
    },
    {
        family: 'Libre Baskerville',
        library: 'google',
        variants: [
            { name: 'Regular (400)', value: "'Libre Baskerville', serif", weight: 400 },
            { name: 'Bold (700)', value: "'Libre Baskerville', serif", weight: 700 }
        ]
    },
    {
        family: 'EB Garamond',
        library: 'google',
        variants: [
            { name: 'Variable (400-800)', value: "'EB Garamond', serif", isVariable: true, minWeight: 400, maxWeight: 800 }
        ]
    },
    {
        family: 'Cormorant Garamond',
        library: 'google',
        variants: [
            { name: 'Light (300)', value: "'Cormorant Garamond', serif", weight: 300 },
            { name: 'Regular (400)', value: "'Cormorant Garamond', serif", weight: 400 },
            { name: 'Medium (500)', value: "'Cormorant Garamond', serif", weight: 500 },
            { name: 'SemiBold (600)', value: "'Cormorant Garamond', serif", weight: 600 },
            { name: 'Bold (700)', value: "'Cormorant Garamond', serif", weight: 700 }
        ]
    }
];

// Font Library fonts (to be loaded dynamically)
let fontLibraryFonts = [];

// Currently selected library
let selectedLibrary = 'all';

// Load fonts from Font Library.org
async function loadFontLibraryFonts() {
    try {
        // Popular open-source fonts from Font Library that work well
        const fontLibraryData = [
            {
                family: 'Jost',
                url: 'https://cdn.jsdelivr.net/fontsource/fonts/jost@latest/latin-400-normal.woff2',
                variants: [
                    { name: 'Regular (400)', value: "'Jost', sans-serif", weight: 400 }
                ]
            },
            {
                family: 'Manrope',
                url: 'https://cdn.jsdelivr.net/fontsource/fonts/manrope@latest/latin-400-normal.woff2',
                variants: [
                    { name: 'Regular (400)', value: "'Manrope', sans-serif", weight: 400 }
                ]
            },
            {
                family: 'Urbanist',
                url: 'https://cdn.jsdelivr.net/fontsource/fonts/urbanist@latest/latin-400-normal.woff2',
                variants: [
                    { name: 'Regular (400)', value: "'Urbanist', sans-serif", weight: 400 }
                ]
            },
            {
                family: 'Epilogue',
                url: 'https://cdn.jsdelivr.net/fontsource/fonts/epilogue@latest/latin-400-normal.woff2',
                variants: [
                    { name: 'Regular (400)', value: "'Epilogue', sans-serif", weight: 400 }
                ]
            },
            {
                family: 'Sora',
                url: 'https://cdn.jsdelivr.net/fontsource/fonts/sora@latest/latin-400-normal.woff2',
                variants: [
                    { name: 'Regular (400)', value: "'Sora', sans-serif", weight: 400 }
                ]
            },
            {
                family: 'Outfit',
                url: 'https://cdn.jsdelivr.net/fontsource/fonts/outfit@latest/latin-400-normal.woff2',
                variants: [
                    { name: 'Regular (400)', value: "'Outfit', sans-serif", weight: 400 }
                ]
            },
            {
                family: 'Public Sans',
                url: 'https://cdn.jsdelivr.net/fontsource/fonts/public-sans@latest/latin-400-normal.woff2',
                variants: [
                    { name: 'Regular (400)', value: "'Public Sans', sans-serif", weight: 400 }
                ]
            },
            {
                family: 'Commissioner',
                url: 'https://cdn.jsdelivr.net/fontsource/fonts/commissioner@latest/latin-400-normal.woff2',
                variants: [
                    { name: 'Regular (400)', value: "'Commissioner', sans-serif", weight: 400 }
                ]
            },
            {
                family: 'Chivo',
                url: 'https://cdn.jsdelivr.net/fontsource/fonts/chivo@latest/latin-400-normal.woff2',
                variants: [
                    { name: 'Regular (400)', value: "'Chivo', sans-serif", weight: 400 }
                ]
            },
            {
                family: 'Red Hat Display',
                url: 'https://cdn.jsdelivr.net/fontsource/fonts/red-hat-display@latest/latin-400-normal.woff2',
                variants: [
                    { name: 'Regular (400)', value: "'Red Hat Display', sans-serif", weight: 400 }
                ]
            },
            {
                family: 'Fira Sans',
                url: 'https://cdn.jsdelivr.net/fontsource/fonts/fira-sans@latest/latin-400-normal.woff2',
                variants: [
                    { name: 'Regular (400)', value: "'Fira Sans', sans-serif", weight: 400 }
                ]
            },
            {
                family: 'Archivo',
                url: 'https://cdn.jsdelivr.net/fontsource/fonts/archivo@latest/latin-400-normal.woff2',
                variants: [
                    { name: 'Regular (400)', value: "'Archivo', sans-serif", weight: 400 }
                ]
            },
            {
                family: 'Lexend',
                url: 'https://cdn.jsdelivr.net/fontsource/fonts/lexend@latest/latin-400-normal.woff2',
                variants: [
                    { name: 'Regular (400)', value: "'Lexend', sans-serif", weight: 400 }
                ]
            },
            {
                family: 'Plus Jakarta Sans',
                url: 'https://cdn.jsdelivr.net/fontsource/fonts/plus-jakarta-sans@latest/latin-400-normal.woff2',
                variants: [
                    { name: 'Regular (400)', value: "'Plus Jakarta Sans', sans-serif", weight: 400 }
                ]
            },
            {
                family: 'Figtree',
                url: 'https://cdn.jsdelivr.net/fontsource/fonts/figtree@latest/latin-400-normal.woff2',
                variants: [
                    { name: 'Regular (400)', value: "'Figtree', sans-serif", weight: 400 }
                ]
            },
            {
                family: 'Onest',
                url: 'https://cdn.jsdelivr.net/fontsource/fonts/onest@latest/latin-400-normal.woff2',
                variants: [
                    { name: 'Regular (400)', value: "'Onest', sans-serif", weight: 400 }
                ]
            },
            {
                family: 'Bricolage Grotesque',
                url: 'https://cdn.jsdelivr.net/fontsource/fonts/bricolage-grotesque@latest/latin-400-normal.woff2',
                variants: [
                    { name: 'Regular (400)', value: "'Bricolage Grotesque', sans-serif", weight: 400 }
                ]
            },
            {
                family: 'Atkinson Hyperlegible',
                url: 'https://cdn.jsdelivr.net/fontsource/fonts/atkinson-hyperlegible@latest/latin-400-normal.woff2',
                variants: [
                    { name: 'Regular (400)', value: "'Atkinson Hyperlegible', sans-serif", weight: 400 }
                ]
            },
            {
                family: 'Space Grotesk',
                url: 'https://cdn.jsdelivr.net/fontsource/fonts/space-grotesk@latest/latin-400-normal.woff2',
                variants: [
                    { name: 'Regular (400)', value: "'Space Grotesk', sans-serif", weight: 400 }
                ]
            },
            {
                family: 'Geist Sans',
                url: 'https://cdn.jsdelivr.net/fontsource/fonts/geist-sans@latest/latin-400-normal.woff2',
                variants: [
                    { name: 'Regular (400)', value: "'Geist Sans', sans-serif", weight: 400 }
                ]
            },
            {
                family: 'Albert Sans',
                url: 'https://cdn.jsdelivr.net/fontsource/fonts/albert-sans@latest/latin-400-normal.woff2',
                variants: [
                    { name: 'Regular (400)', value: "'Albert Sans', sans-serif", weight: 400 }
                ]
            },
            {
                family: 'Satoshi',
                url: 'https://cdn.jsdelivr.net/fontsource/fonts/satoshi@latest/latin-400-normal.woff2',
                variants: [
                    { name: 'Regular (400)', value: "'Satoshi', sans-serif", weight: 400 }
                ]
            },
            {
                family: 'General Sans',
                url: 'https://cdn.jsdelivr.net/fontsource/fonts/general-sans@latest/latin-400-normal.woff2',
                variants: [
                    { name: 'Regular (400)', value: "'General Sans', sans-serif", weight: 400 }
                ]
            },
            {
                family: 'Cabinet Grotesk',
                url: 'https://cdn.jsdelivr.net/fontsource/fonts/cabinet-grotesk@latest/latin-400-normal.woff2',
                variants: [
                    { name: 'Regular (400)', value: "'Cabinet Grotesk', sans-serif", weight: 400 }
                ]
            }
        ];

        // Create @font-face rules and format fonts
        const style = document.createElement('style');
        let css = '';

        fontLibraryFonts = fontLibraryData.map(font => {
            // Add @font-face rule
            css += `
                @font-face {
                    font-family: '${font.family}';
                    src: url('${font.url}') format('woff2');
                    font-weight: 400;
                    font-style: normal;
                    font-display: swap;
                }
            `;

            return {
                family: font.family,
                library: 'fontlibrary',
                variants: font.variants
            };
        });

        style.textContent = css;
        document.head.appendChild(style);

        // Update font selector if library is selected
        if (selectedLibrary === 'all' || selectedLibrary === 'fontlibrary') {
            initializeFonts();
        }

    } catch (error) {
        console.error('Error loading Font Library fonts:', error);
    }
}

// Get filtered fonts based on selected library
function getFilteredFonts() {
    if (selectedLibrary === 'all') {
        return [...fonts, ...fontLibraryFonts];
    } else if (selectedLibrary === 'fontlibrary') {
        return fontLibraryFonts;
    } else {
        return fonts.filter(font => font.library === selectedLibrary);
    }
}

// Element labels for UI
const elementLabels = {
    h1: 'Heading 1 (H1)',
    h2: 'Heading 2 (H2)',
    h3: 'Heading 3 (H3)',
    h4: 'Heading 4 (H4)',
    p: 'Paragraph',
    blockquote: 'Blockquote',
    li: 'List Items',
    strong: 'Bold',
    em: 'Italic',
    code: 'Code (Inline)',
    pre: 'Code Block'
};

// Default settings for each element (dark colors initialized with suggested values)
const defaultSettings = {
    h1: { fontIndex: 0, variantIndex: 0, fontSize: 48, fontWeight: 700, lineHeight: 1.2, letterSpacing: 0, lightColor: '#333333', darkColor: '#e0e0e0', lightBgColor: 'transparent', darkBgColor: 'transparent' },
    h2: { fontIndex: 0, variantIndex: 0, fontSize: 36, fontWeight: 600, lineHeight: 1.3, letterSpacing: 0, lightColor: '#333333', darkColor: '#e0e0e0', lightBgColor: 'transparent', darkBgColor: 'transparent' },
    h3: { fontIndex: 0, variantIndex: 0, fontSize: 28, fontWeight: 600, lineHeight: 1.4, letterSpacing: 0, lightColor: '#333333', darkColor: '#e0e0e0', lightBgColor: 'transparent', darkBgColor: 'transparent' },
    h4: { fontIndex: 0, variantIndex: 0, fontSize: 24, fontWeight: 600, lineHeight: 1.4, letterSpacing: 0, lightColor: '#333333', darkColor: '#e0e0e0', lightBgColor: 'transparent', darkBgColor: 'transparent' },
    p: { fontIndex: 0, variantIndex: 0, fontSize: 16, fontWeight: 400, lineHeight: 1.6, letterSpacing: 0, lightColor: '#333333', darkColor: '#cccccc', lightBgColor: 'transparent', darkBgColor: 'transparent' },
    blockquote: { fontIndex: 0, variantIndex: 0, fontSize: 18, fontWeight: 400, lineHeight: 1.6, letterSpacing: 0, lightColor: '#666666', darkColor: '#999999', lightBgColor: '#f9f9f9', darkBgColor: '#2a2a2a' },
    li: { fontIndex: 0, variantIndex: 0, fontSize: 16, fontWeight: 400, lineHeight: 1.6, letterSpacing: 0, lightColor: '#333333', darkColor: '#cccccc', lightBgColor: 'transparent', darkBgColor: 'transparent' },
    strong: { fontIndex: 0, variantIndex: 0, fontSize: 16, fontWeight: 700, lineHeight: 1.6, letterSpacing: 0, lightColor: '#333333', darkColor: '#e0e0e0', lightBgColor: 'transparent', darkBgColor: 'transparent' },
    em: { fontIndex: 0, variantIndex: 0, fontSize: 16, fontWeight: 400, lineHeight: 1.6, letterSpacing: 0, lightColor: '#333333', darkColor: '#cccccc', lightBgColor: 'transparent', darkBgColor: 'transparent' },
    code: { fontIndex: 0, variantIndex: 0, fontSize: 14, fontWeight: 400, lineHeight: 1.6, letterSpacing: 0, lightColor: '#d63384', darkColor: '#ff79c6', lightBgColor: '#f5f5f5', darkBgColor: '#3a3a3a' },
    pre: { fontIndex: 0, variantIndex: 0, fontSize: 14, fontWeight: 400, lineHeight: 1.5, letterSpacing: 0, lightColor: '#333333', darkColor: '#e0e0e0', lightBgColor: '#f8f8f8', darkBgColor: '#2a2a2a' }
};

// Suggested dark colors when enabling dark mode
const suggestedDarkColors = {
    h1: '#e0e0e0',
    h2: '#e0e0e0',
    h3: '#e0e0e0',
    h4: '#e0e0e0',
    p: '#cccccc',
    blockquote: '#999999',
    li: '#cccccc',
    strong: '#e0e0e0',
    em: '#cccccc',
    code: '#ff79c6',
    pre: '#e0e0e0'
};

// Current settings (initialized from defaults)
let elementSettings = JSON.parse(JSON.stringify(defaultSettings));

// Current element being edited
let currentElement = 'h1';

// Dark mode state
let pageDarkMode = false;     // Whether the page is in dark mode

// Content background colors
let contentBgSettings = {
    lightBg: '#ffffff',
    darkBg: '#1a1a1a'
};

// Content presets
const contentPresets = {
    article: `# Breaking: Major Scientific Discovery

Scientists have announced a groundbreaking discovery that promises to revolutionize our understanding of fundamental physics.

## The Discovery

The research team, led by Dr. Sarah Chen, spent five years developing a new theoretical framework. Their findings demonstrate a previously unknown relationship between quantum mechanics and gravitational fields.

### Key Findings
- Quantum entanglement occurs at larger scales than previously thought
- Gravitational effects can influence quantum states
- New mathematical models predict observable phenomena

## Implications

This breakthrough has immediate implications for:

1. **Quantum computing** - potentially solving decoherence problems
2. **Communications** - ultra-secure quantum networks
3. **Space exploration** - new propulsion theories

> "This changes everything we thought we knew about the quantum realm." — Dr. Chen

The research continues with \`international collaboration\` and peer review.`,

    blog: `# Why I Switched to a Four-Day Work Week

After years of burning out, I decided to experiment with a compressed schedule. Here's what I learned.

## The Initial Struggle

When I first proposed the idea to my team, I was met with skepticism. *How could we maintain output while working 20% less?*

The answer was surprisingly simple:
- Be more intentional with time
- Eliminate inefficiencies
- Focus on what matters

## Unexpected Benefits

Six months in, our metrics have actually **improved**:

1. Features ship faster
2. Customer satisfaction is up
3. Team morale at all-time high

### What Changed?

Without the luxury of endless time, we became laser-focused. Deep work blocks replaced endless meetings. Email became a tool, not a distraction.

> "The best way to get something done is to have less time to do it."

The extra day off gives everyone time to recharge and return with fresh perspectives.

#### Technical Implementation

We use \`git flow\` for version control and **automated testing** to maintain quality.`,

    minimal: `# Typography Test

## Headers and Text

This is a paragraph demonstrating how body text appears with your selected font. The quick brown fox jumps over the lazy dog.

### Subsection

Short sentence. Medium length sentence with more words. A much longer sentence that demonstrates how the font handles extended lines of text.

#### Lists and Formatting

- First item in the list
- Second item with **bold text**
- Third item with *italic text*

1. Numbered list item one
2. Numbered list item two
3. Numbered list item three

> A blockquote to test indentation and emphasis styling.

Regular paragraph with \`inline code\` and a [link example](#).`,

    custom: `# Your Custom Markdown

Start typing your markdown here. You can use:

## Headers at different levels

Regular paragraphs with **bold** and *italic* text.

### Lists
- Unordered lists
- With multiple items

1. Ordered lists
2. Also work great

> Blockquotes for emphasis

\`\`\`
Code blocks for snippets
\`\`\`

And much more!`
};

// DOM elements
const elementSelector = document.getElementById('elementSelector');
const currentElementLabel = document.getElementById('currentElementLabel');
const librarySelector = document.getElementById('librarySelector');
const fontSelector = document.getElementById('fontSelector');
const fontVariant = document.getElementById('fontVariant');
const fontSize = document.getElementById('fontSize');
const fontSizeValue = document.getElementById('fontSizeValue');
const fontWeight = document.getElementById('fontWeight');
const fontWeightValue = document.getElementById('fontWeightValue');
const lineHeight = document.getElementById('lineHeight');
const lineHeightValue = document.getElementById('lineHeightValue');
const letterSpacing = document.getElementById('letterSpacing');
const letterSpacingValue = document.getElementById('letterSpacingValue');
const lightColor = document.getElementById('lightColor');
const lightColorValue = document.getElementById('lightColorValue');
const resetLightColor = document.getElementById('resetLightColor');
const darkColor = document.getElementById('darkColor');
const darkColorValue = document.getElementById('darkColorValue');
const resetDarkColor = document.getElementById('resetDarkColor');
const lightBgColor = document.getElementById('lightBgColor');
const lightBgColorValue = document.getElementById('lightBgColorValue');
const resetLightBgColor = document.getElementById('resetLightBgColor');
const darkBgColor = document.getElementById('darkBgColor');
const darkBgColorValue = document.getElementById('darkBgColorValue');
const resetDarkBgColor = document.getElementById('resetDarkBgColor');
const darkColorGroup = document.getElementById('darkColorGroup');
const darkModeToggle = document.getElementById('darkModeToggle');

const contentLightBg = document.getElementById('contentLightBg');
const contentLightBgValue = document.getElementById('contentLightBgValue');
const resetContentLightBg = document.getElementById('resetContentLightBg');
const contentDarkBg = document.getElementById('contentDarkBg');
const contentDarkBgValue = document.getElementById('contentDarkBgValue');
const resetContentDarkBg = document.getElementById('resetContentDarkBg');

const contentPreset = document.getElementById('contentPreset');
const preview = document.getElementById('preview');
const editorContainer = document.getElementById('editorContainer');
const previewContainer = document.getElementById('previewContainer');
const markdownEditor = document.getElementById('markdownEditor');
const previewToggle = document.getElementById('previewToggle');

const resetElement = document.getElementById('resetElement');
const resetAll = document.getElementById('resetAll');
const copySettings = document.getElementById('copySettings');
const exportSettings = document.getElementById('exportSettings');
const editContent = document.getElementById('editContent');
const fullscreenToggle = document.getElementById('fullscreenToggle');
const fullscreenOverlay = document.getElementById('fullscreenOverlay');
const fullscreenContent = document.getElementById('fullscreenContent');
const exitFullscreen = document.getElementById('exitFullscreen');

let isEditorVisible = false;
let currentMarkdown = contentPresets.article;

// Initialize font selector
function initializeFonts() {
    fontSelector.innerHTML = '';
    const filteredFonts = getFilteredFonts();

    filteredFonts.forEach((font, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = font.family;

        // Find the original index in the combined arrays
        const fontsIndex = fonts.indexOf(font);
        if (fontsIndex >= 0) {
            option.dataset.originalIndex = fontsIndex;
        } else {
            const fontLibraryIndex = fontLibraryFonts.indexOf(font);
            option.dataset.originalIndex = fonts.length + fontLibraryIndex;
        }

        fontSelector.appendChild(option);
    });

    // If current font is not in filtered list, reset to first available
    const currentFontIndex = elementSettings[currentElement].fontIndex;
    let currentFont;

    if (currentFontIndex < fonts.length) {
        currentFont = fonts[currentFontIndex];
    } else {
        currentFont = fontLibraryFonts[currentFontIndex - fonts.length];
    }

    const filteredIndex = filteredFonts.indexOf(currentFont);
    if (currentFont && filteredIndex === -1) {
        // Current font not in filtered list, select first font
        if (filteredFonts.length > 0) {
            fontSelector.value = 0;
            updateVariants();
        }
    }
}

// Load settings for current element
function loadElementSettings() {
    const settings = elementSettings[currentElement];

    // Update label
    currentElementLabel.textContent = elementLabels[currentElement];

    // Find the font in the filtered list
    const font = settings.fontIndex < fonts.length ?
                 fonts[settings.fontIndex] :
                 fontLibraryFonts[settings.fontIndex - fonts.length];
    const filteredFonts = getFilteredFonts();
    const filteredIndex = filteredFonts.indexOf(font);

    // Update font selector
    if (filteredIndex >= 0) {
        fontSelector.value = filteredIndex;
    } else {
        // Font not in current filter, select first available
        fontSelector.value = 0;
    }
    updateVariants();

    // Update other controls
    fontSize.value = settings.fontSize;
    fontSizeValue.textContent = settings.fontSize + 'px';

    fontWeight.value = settings.fontWeight;
    fontWeightValue.textContent = settings.fontWeight;

    lineHeight.value = settings.lineHeight;
    lineHeightValue.textContent = settings.lineHeight;

    letterSpacing.value = settings.letterSpacing;
    letterSpacingValue.textContent = settings.letterSpacing + 'px';

    // Load both light and dark colors
    lightColor.value = settings.lightColor || defaultSettings[currentElement].lightColor || '#333333';
    lightColorValue.textContent = lightColor.value;

    darkColor.value = settings.darkColor || defaultSettings[currentElement].darkColor;
    darkColorValue.textContent = darkColor.value;

    // Load background colors
    const lightBg = settings.lightBgColor || defaultSettings[currentElement].lightBgColor || 'transparent';
    const darkBg = settings.darkBgColor || defaultSettings[currentElement].darkBgColor || 'transparent';

    if (lightBg === 'transparent') {
        lightBgColor.value = '#ffffff';
        lightBgColorValue.textContent = 'transparent';
    } else {
        lightBgColor.value = lightBg;
        lightBgColorValue.textContent = lightBg;
    }

    if (darkBg === 'transparent') {
        darkBgColor.value = '#1a1a1a';
        darkBgColorValue.textContent = 'transparent';
    } else {
        darkBgColor.value = darkBg;
        darkBgColorValue.textContent = darkBg;
    }

    // Update variant selector
    fontVariant.value = settings.variantIndex;

    // Check if weight slider should be enabled
    const selectedFont = fonts[settings.fontIndex];
    const selectedVariant = selectedFont.variants[settings.variantIndex];
    if (selectedVariant.isVariable) {
        fontWeight.disabled = false;
        fontWeight.min = selectedVariant.minWeight;
        fontWeight.max = selectedVariant.maxWeight;
    } else {
        fontWeight.disabled = true;
    }
}

// Save current settings
function saveCurrentSettings() {
    const selectedFont = getFontFromFilteredIndex(fontSelector.value);
    const originalIndex = getOriginalFontIndex(selectedFont);

    elementSettings[currentElement] = {
        fontIndex: originalIndex,
        variantIndex: parseInt(fontVariant.value),
        fontSize: parseInt(fontSize.value),
        fontWeight: parseInt(fontWeight.value),
        lineHeight: parseFloat(lineHeight.value),
        letterSpacing: parseFloat(letterSpacing.value),
        lightColor: lightColor.value,
        darkColor: darkColor.value,
        lightBgColor: lightBgColorValue.textContent === 'transparent' ? 'transparent' : lightBgColor.value,
        darkBgColor: darkBgColorValue.textContent === 'transparent' ? 'transparent' : darkBgColor.value
    };
}

// Get actual font object from filtered index
function getFontFromFilteredIndex(index) {
    const filteredFonts = getFilteredFonts();
    return filteredFonts[index];
}

// Get original index from font object
function getOriginalFontIndex(font) {
    const idx = fonts.indexOf(font);
    if (idx >= 0) return idx;
    const flIdx = fontLibraryFonts.indexOf(font);
    if (flIdx >= 0) return fonts.length + flIdx;
    return 0;
}

// Update font variants
function updateVariants() {
    const selectedFont = getFontFromFilteredIndex(fontSelector.value);
    fontVariant.innerHTML = '';

    selectedFont.variants.forEach((variant, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = variant.name;
        fontVariant.appendChild(option);
    });

    // Try to maintain variant selection if possible
    if (fontVariant.options.length > elementSettings[currentElement].variantIndex) {
        fontVariant.value = elementSettings[currentElement].variantIndex;
    } else {
        fontVariant.value = 0;
    }

    // Update weight slider based on variant
    const selectedVariant = selectedFont.variants[fontVariant.value];
    if (selectedVariant.isVariable) {
        fontWeight.disabled = false;
        fontWeight.min = selectedVariant.minWeight;
        fontWeight.max = selectedVariant.maxWeight;
    } else {
        fontWeight.disabled = true;
        if (selectedVariant.weight) {
            fontWeight.value = selectedVariant.weight;
            fontWeightValue.textContent = selectedVariant.weight;
        }
    }
}

// Render markdown to HTML
function renderMarkdown() {
    const html = marked.parse(currentMarkdown);
    preview.innerHTML = html;
    applyAllStyles();
}

// Apply content background color
function applyContentBackground() {
    const bgColor = pageDarkMode ? contentBgSettings.darkBg : contentBgSettings.lightBg;

    // Apply to the preview container, not the preview content
    const previewContainer = document.getElementById('previewContainer');
    if (previewContainer) {
        previewContainer.style.backgroundColor = bgColor;
    }

    // Keep padding on the preview content itself
    preview.style.padding = '30px';

    // Also apply to fullscreen overlay
    const fullscreenOverlay = document.getElementById('fullscreenOverlay');
    if (fullscreenOverlay) {
        fullscreenOverlay.style.backgroundColor = bgColor;
    }

    // Apply padding to fullscreen content
    const fullscreenContent = document.getElementById('fullscreenContent');
    if (fullscreenContent) {
        fullscreenContent.style.padding = '30px';
    }
}

// Apply styles to all elements
function applyAllStyles() {
    Object.keys(elementSettings).forEach(tag => {
        applyElementStyles(tag);
    });
    applyContentBackground();
    updateFontSummary();
}

// Apply styles to specific element type
function applyElementStyles(tag) {
    const settings = elementSettings[tag];
    const font = settings.fontIndex < fonts.length ?
                 fonts[settings.fontIndex] :
                 fontLibraryFonts[settings.fontIndex - fonts.length];
    const variant = font.variants[settings.variantIndex];

    let elements = preview.querySelectorAll(tag);

    // Special handling for inline elements within other elements
    if (tag === 'strong' || tag === 'em' || tag === 'code') {
        elements = preview.querySelectorAll(`p ${tag}, li ${tag}, blockquote ${tag}, h1 ${tag}, h2 ${tag}, h3 ${tag}, h4 ${tag}`);
    }

    // For pre elements, also style the code inside
    if (tag === 'pre') {
        elements = preview.querySelectorAll('pre');
    }

    elements.forEach(element => {
        element.style.fontFamily = variant.value;

        // For inline elements (strong, em, code), inherit size from parent but allow override
        if (tag === 'strong' || tag === 'em' || tag === 'code') {
            // Only apply font-size if it differs significantly from parent
            const parentSize = parseInt(window.getComputedStyle(element.parentElement).fontSize);
            if (Math.abs(settings.fontSize - parentSize) > 2) {
                element.style.fontSize = settings.fontSize + 'px';
            } else {
                element.style.fontSize = 'inherit';
            }

            // Inline elements should generally inherit line-height
            element.style.lineHeight = 'inherit';
        } else {
            element.style.fontSize = settings.fontSize + 'px';
            element.style.lineHeight = settings.lineHeight;
        }

        element.style.letterSpacing = settings.letterSpacing + 'px';

        // Apply color based on page dark mode
        const colorToApply = pageDarkMode && settings.darkColor ?
            settings.darkColor :
            (settings.lightColor || defaultSettings[tag].lightColor || '#333333');
        element.style.color = colorToApply;

        // Apply background color based on page dark mode
        const bgColorToApply = pageDarkMode && settings.darkBgColor ?
            (settings.darkBgColor === 'transparent' ? 'transparent' : settings.darkBgColor) :
            (settings.lightBgColor === 'transparent' ? 'transparent' : settings.lightBgColor);

        if (bgColorToApply && bgColorToApply !== 'transparent') {
            element.style.backgroundColor = bgColorToApply;
            // Different padding for block vs inline elements
            if (tag === 'blockquote') {
                element.style.padding = '15px 20px';
                element.style.borderRadius = '4px';
                element.style.borderLeft = '4px solid ' + (pageDarkMode ? '#555' : '#ddd');
                element.style.margin = '15px 0';
            } else if (tag === 'pre') {
                element.style.padding = '15px';
                element.style.borderRadius = '4px';
                element.style.margin = '15px 0';
                element.style.overflow = 'auto';
                // Also style the code inside pre
                const codeEl = element.querySelector('code');
                if (codeEl) {
                    codeEl.style.fontFamily = variant.value;
                    codeEl.style.fontSize = settings.fontSize + 'px';
                    codeEl.style.background = 'transparent';
                    codeEl.style.padding = '0';
                }
            } else if (tag === 'code' || tag === 'strong' || tag === 'em') {
                element.style.padding = '2px 4px';
                element.style.borderRadius = '3px';
            } else {
                element.style.padding = '8px 12px';
                element.style.borderRadius = '4px';
            }
        } else {
            element.style.backgroundColor = 'transparent';
            if (tag === 'blockquote') {
                element.style.padding = '15px 20px';
                element.style.borderLeft = '4px solid ' + (pageDarkMode ? '#555' : '#ddd');
                element.style.margin = '15px 0';
            } else if (tag === 'pre') {
                element.style.padding = '15px';
                element.style.margin = '15px 0';
                element.style.overflow = 'auto';
                // Also style the code inside pre
                const codeEl = element.querySelector('code');
                if (codeEl) {
                    codeEl.style.fontFamily = variant.value;
                    codeEl.style.fontSize = settings.fontSize + 'px';
                    codeEl.style.background = 'transparent';
                    codeEl.style.padding = '0';
                }
            } else {
                element.style.padding = '';
                element.style.borderRadius = '';
            }
        }

        if (variant.isVariable) {
            element.style.fontWeight = settings.fontWeight;
        } else {
            element.style.fontWeight = variant.weight || settings.fontWeight;
        }

        // Special styles for certain elements
        if (tag === 'em') {
            element.style.fontStyle = 'italic';
        } else if (tag === 'code') {
            // Keep monospace as fallback for inline code
            element.style.fontFamily = variant.value + ', monospace';
        }
    });
}

// Helper to determine if a color is light
function isLightColor(color) {
    // Convert hex to RGB
    const hex = color.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);

    // Calculate luminance
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.7;
}

// Update font summary
function updateFontSummary() {
    const summary = document.getElementById('fontSummary');
    if (!summary) return;

    let html = '';

    // Define the order we want to show elements
    const elementOrder = ['h1', 'h2', 'h3', 'h4', 'p', 'blockquote', 'li', 'strong', 'em', 'code'];

    elementOrder.forEach(tag => {
        const settings = elementSettings[tag];
        const font = settings.fontIndex < fonts.length ?
                     fonts[settings.fontIndex] :
                     fontLibraryFonts[settings.fontIndex - fonts.length];
        const variant = font.variants[settings.variantIndex];

        html += `
            <div class="summary-item">
                <div class="summary-element">${elementLabels[tag]}</div>
                <div class="summary-details">
                    <div class="summary-detail">
                        <span class="summary-label">Font:</span>
                        <span>${font.family}</span>
                    </div>
                    <div class="summary-detail">
                        <span class="summary-label">Variant:</span>
                        <span>${variant.name}</span>
                    </div>
                    <div class="summary-detail">
                        <span class="summary-label">Size:</span>
                        <span>${settings.fontSize}px</span>
                    </div>
                    <div class="summary-detail">
                        <span class="summary-label">Weight:</span>
                        <span>${variant.isVariable ? settings.fontWeight : (variant.weight || settings.fontWeight)}</span>
                    </div>
                    <div class="summary-detail">
                        <span class="summary-label">Line:</span>
                        <span>${settings.lineHeight}</span>
                    </div>
                    <div class="summary-detail">
                        <span class="summary-label">Spacing:</span>
                        <span>${settings.letterSpacing}px</span>
                    </div>
                </div>
                <div class="summary-colors">
                    <span class="color-badge ${isLightColor(settings.lightColor || defaultSettings[tag].lightColor) ? 'light-badge' : ''}"
                          style="background: ${settings.lightColor || defaultSettings[tag].lightColor}">
                        Light: ${settings.lightColor || defaultSettings[tag].lightColor}
                    </span>
                    <span class="color-badge ${isLightColor(settings.darkColor || defaultSettings[tag].darkColor) ? 'light-badge' : ''}"
                          style="background: ${settings.darkColor || defaultSettings[tag].darkColor}">
                        Dark: ${settings.darkColor || defaultSettings[tag].darkColor}
                    </span>
                </div>
            </div>
        `;
    });

    summary.innerHTML = html;
}

// Update slider values
function updateSliderValues() {
    fontSizeValue.textContent = fontSize.value + 'px';
    fontWeightValue.textContent = fontWeight.value;
    lineHeightValue.textContent = lineHeight.value;
    letterSpacingValue.textContent = letterSpacing.value + 'px';
}

// Handle preset changes
function handlePresetChange() {
    const preset = contentPreset.value;

    if (preset === 'custom') {
        editorContainer.style.display = 'flex';
        previewContainer.classList.remove('full-width');
        markdownEditor.value = contentPresets.custom;
        currentMarkdown = contentPresets.custom;
        isEditorVisible = true;
        previewToggle.textContent = 'Hide Editor';
    } else {
        editorContainer.style.display = 'none';
        previewContainer.classList.add('full-width');
        currentMarkdown = contentPresets[preset];
        isEditorVisible = false;
    }

    renderMarkdown();
}

// Toggle editor visibility
function toggleEditor() {
    if (contentPreset.value !== 'custom') return;

    if (isEditorVisible) {
        editorContainer.style.display = 'none';
        previewContainer.classList.add('full-width');
        previewToggle.textContent = 'Show Editor';
    } else {
        editorContainer.style.display = 'flex';
        previewContainer.classList.remove('full-width');
        previewToggle.textContent = 'Hide Editor';
    }
    isEditorVisible = !isEditorVisible;
}

// Reset current element settings
function resetCurrentElement() {
    elementSettings[currentElement] = JSON.parse(JSON.stringify(defaultSettings[currentElement]));
    loadElementSettings();
    applyElementStyles(currentElement);
    updateFontSummary();
}

// Reset all settings
function resetAllSettings() {
    if (confirm('Reset all font settings to defaults?')) {
        elementSettings = JSON.parse(JSON.stringify(defaultSettings));
        loadElementSettings();
        applyAllStyles();
    }
}

// Copy settings as CSS
function copySettingsAsCSS() {
    let css = '/* Font Tester Settings */\n\n';

    // Light mode styles
    css += '/* Light Mode */\n';
    Object.keys(elementSettings).forEach(tag => {
        const settings = elementSettings[tag];
        const font = settings.fontIndex < fonts.length ?
                     fonts[settings.fontIndex] :
                     fontLibraryFonts[settings.fontIndex - fonts.length];
        const variant = font.variants[settings.variantIndex];

        css += `${tag} {\n`;
        css += `  font-family: ${variant.value};\n`;
        css += `  font-size: ${settings.fontSize}px;\n`;
        css += `  font-weight: ${variant.isVariable || variant.weight ? (variant.weight || settings.fontWeight) : settings.fontWeight};\n`;
        css += `  line-height: ${settings.lineHeight};\n`;
        css += `  letter-spacing: ${settings.letterSpacing}px;\n`;
        css += `  color: ${settings.lightColor || defaultSettings[tag].lightColor};\n`;
        css += `}\n\n`;
    });

    // Dark mode styles
    css += '/* Dark Mode */\n';
    css += '@media (prefers-color-scheme: dark) {\n';
    Object.keys(elementSettings).forEach(tag => {
        const settings = elementSettings[tag];
        const darkColorToUse = settings.darkColor || defaultSettings[tag].darkColor;
        css += `  ${tag} {\n`;
        css += `    color: ${darkColorToUse};\n`;
        css += `  }\n`;
    });
    css += '}\n';

    navigator.clipboard.writeText(css);
    alert('CSS copied to clipboard!');
}

// Export settings as JSON
function exportSettingsAsJSON() {
    const exportData = {
        version: '1.0',
        timestamp: new Date().toISOString(),
        settings: {}
    };

    Object.keys(elementSettings).forEach(tag => {
        const settings = elementSettings[tag];
        const font = settings.fontIndex < fonts.length ?
                     fonts[settings.fontIndex] :
                     fontLibraryFonts[settings.fontIndex - fonts.length];
        const variant = font.variants[settings.variantIndex];

        exportData.settings[tag] = {
            font: font.family,
            variant: variant.name,
            fontSize: settings.fontSize,
            fontWeight: settings.fontWeight,
            lineHeight: settings.lineHeight,
            letterSpacing: settings.letterSpacing,
            lightColor: settings.lightColor || defaultSettings[tag].lightColor,
            darkColor: settings.darkColor || defaultSettings[tag].darkColor
        };
    });

    const json = JSON.stringify(exportData, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'font-settings.json';
    a.click();
    URL.revokeObjectURL(url);
}

// Open markdown editor
function openEditor() {
    if (contentPreset.value === 'custom') {
        // Already in custom mode, just show the editor
        editorContainer.style.display = 'flex';
        previewContainer.classList.remove('full-width');
        isEditorVisible = true;
        previewToggle.textContent = 'Hide Editor';
    } else {
        // Switch to custom mode and open editor
        contentPreset.value = 'custom';
        editorContainer.style.display = 'flex';
        previewContainer.classList.remove('full-width');

        // Load current content into editor
        markdownEditor.value = currentMarkdown;
        isEditorVisible = true;
        previewToggle.textContent = 'Hide Editor';
    }
}

// Enter fullscreen mode
function enterFullscreen() {
    fullscreenOverlay.style.display = 'block';

    // Apply dark mode class if needed
    if (pageDarkMode) {
        fullscreenOverlay.classList.add('dark-mode');
    } else {
        fullscreenOverlay.classList.remove('dark-mode');
    }

    // Clone the preview content
    const clonedContent = preview.cloneNode(true);
    fullscreenContent.innerHTML = '';
    fullscreenContent.appendChild(clonedContent);

    // Apply content background to overlay
    const bgColor = pageDarkMode ? contentBgSettings.darkBg : contentBgSettings.lightBg;
    fullscreenOverlay.style.backgroundColor = bgColor;

    // Apply padding to content
    fullscreenContent.style.padding = '30px';

    // Apply styles to fullscreen content
    applyStylesToElement(fullscreenContent);

    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

// Exit fullscreen mode
function exitFullscreenMode() {
    fullscreenOverlay.style.display = 'none';
    fullscreenContent.innerHTML = '';

    // Restore body scroll
    document.body.style.overflow = '';
}

// Apply styles to a specific container
function applyStylesToElement(container) {
    Object.keys(elementSettings).forEach(tag => {
        const settings = elementSettings[tag];
        const font = settings.fontIndex < fonts.length ?
                     fonts[settings.fontIndex] :
                     fontLibraryFonts[settings.fontIndex - fonts.length];
        const variant = font.variants[settings.variantIndex];

        let elements = container.querySelectorAll(tag);

        // Special handling for inline elements
        if (tag === 'strong' || tag === 'em' || tag === 'code') {
            elements = container.querySelectorAll(`p ${tag}, li ${tag}, blockquote ${tag}, h1 ${tag}, h2 ${tag}, h3 ${tag}, h4 ${tag}`);
        }

        // For pre elements
        if (tag === 'pre') {
            elements = container.querySelectorAll('pre');
        }

        elements.forEach(element => {
            element.style.fontFamily = variant.value;

            // For inline elements, inherit size from parent but allow override
            if (tag === 'strong' || tag === 'em' || tag === 'code') {
                const parentSize = parseInt(window.getComputedStyle(element.parentElement).fontSize);
                if (Math.abs(settings.fontSize - parentSize) > 2) {
                    element.style.fontSize = settings.fontSize + 'px';
                } else {
                    element.style.fontSize = 'inherit';
                }
                element.style.lineHeight = 'inherit';
            } else {
                element.style.fontSize = settings.fontSize + 'px';
                element.style.lineHeight = settings.lineHeight;
            }

            element.style.letterSpacing = settings.letterSpacing + 'px';

            // Apply color based on page dark mode
            const colorToApply = pageDarkMode && settings.darkColor ?
                settings.darkColor :
                (settings.lightColor || defaultSettings[tag].lightColor || '#333333');
            element.style.color = colorToApply;

            // Apply background color based on page dark mode
            const bgColorToApply = pageDarkMode && settings.darkBgColor ?
                (settings.darkBgColor === 'transparent' ? 'transparent' : settings.darkBgColor) :
                (settings.lightBgColor === 'transparent' ? 'transparent' : settings.lightBgColor);

            if (bgColorToApply && bgColorToApply !== 'transparent') {
                element.style.backgroundColor = bgColorToApply;
                // Different padding for block vs inline elements
                if (tag === 'blockquote') {
                    element.style.padding = '15px 20px';
                    element.style.borderRadius = '4px';
                    element.style.borderLeft = '4px solid ' + (pageDarkMode ? '#555' : '#ddd');
                    element.style.margin = '15px 0';
                } else if (tag === 'pre') {
                    element.style.padding = '15px';
                    element.style.borderRadius = '4px';
                    element.style.margin = '15px 0';
                    element.style.overflow = 'auto';
                    // Also style the code inside pre
                    const codeEl = element.querySelector('code');
                    if (codeEl) {
                        codeEl.style.fontFamily = variant.value;
                        codeEl.style.fontSize = settings.fontSize + 'px';
                        codeEl.style.background = 'transparent';
                        codeEl.style.padding = '0';
                    }
                } else if (tag === 'code' || tag === 'strong' || tag === 'em') {
                    element.style.padding = '2px 4px';
                    element.style.borderRadius = '3px';
                } else {
                    element.style.padding = '8px 12px';
                    element.style.borderRadius = '4px';
                }
            } else {
                element.style.backgroundColor = 'transparent';
                if (tag === 'blockquote') {
                    element.style.padding = '15px 20px';
                    element.style.borderLeft = '4px solid ' + (pageDarkMode ? '#555' : '#ddd');
                    element.style.margin = '15px 0';
                } else if (tag === 'pre') {
                    element.style.padding = '15px';
                    element.style.margin = '15px 0';
                    element.style.overflow = 'auto';
                    // Also style the code inside pre
                    const codeEl = element.querySelector('code');
                    if (codeEl) {
                        codeEl.style.fontFamily = variant.value;
                        codeEl.style.fontSize = settings.fontSize + 'px';
                        codeEl.style.background = 'transparent';
                        codeEl.style.padding = '0';
                    }
                } else {
                    element.style.padding = '';
                    element.style.borderRadius = '';
                }
            }

            if (variant.isVariable) {
                element.style.fontWeight = settings.fontWeight;
            } else {
                element.style.fontWeight = variant.weight || settings.fontWeight;
            }

            // Special styles for certain elements
            if (tag === 'em') {
                element.style.fontStyle = 'italic';
            } else if (tag === 'code') {
                element.style.fontFamily = variant.value + ', monospace';
            }
        });
    });
}

// Event listeners
librarySelector.addEventListener('change', () => {
    selectedLibrary = librarySelector.value;
    initializeFonts();
    loadElementSettings();
});

elementSelector.addEventListener('change', () => {
    saveCurrentSettings();
    currentElement = elementSelector.value;
    loadElementSettings();
});

fontSelector.addEventListener('change', () => {
    updateVariants();
    saveCurrentSettings();
    applyElementStyles(currentElement);
    updateFontSummary();
});

fontVariant.addEventListener('change', () => {
    const selectedFont = fonts[fontSelector.value];
    const selectedVariant = selectedFont.variants[fontVariant.value];

    if (selectedVariant.isVariable) {
        fontWeight.disabled = false;
        fontWeight.min = selectedVariant.minWeight;
        fontWeight.max = selectedVariant.maxWeight;
    } else {
        fontWeight.disabled = true;
        if (selectedVariant.weight) {
            fontWeight.value = selectedVariant.weight;
            fontWeightValue.textContent = selectedVariant.weight;
        }
    }

    saveCurrentSettings();
    applyElementStyles(currentElement);
    updateFontSummary();
});

fontSize.addEventListener('input', () => {
    updateSliderValues();
    saveCurrentSettings();
    applyElementStyles(currentElement);
    updateFontSummary();
});

fontWeight.addEventListener('input', () => {
    updateSliderValues();
    saveCurrentSettings();
    applyElementStyles(currentElement);
    updateFontSummary();
});

lineHeight.addEventListener('input', () => {
    updateSliderValues();
    saveCurrentSettings();
    applyElementStyles(currentElement);
    updateFontSummary();
});

letterSpacing.addEventListener('input', () => {
    updateSliderValues();
    saveCurrentSettings();
    applyElementStyles(currentElement);
    updateFontSummary();
});

lightColor.addEventListener('input', () => {
    lightColorValue.textContent = lightColor.value;
    saveCurrentSettings();
    applyElementStyles(currentElement);
    updateFontSummary();
});

darkColor.addEventListener('input', () => {
    darkColorValue.textContent = darkColor.value;
    saveCurrentSettings();
    applyElementStyles(currentElement);
    updateFontSummary();
});

lightBgColor.addEventListener('input', () => {
    lightBgColorValue.textContent = lightBgColor.value;
    saveCurrentSettings();
    applyElementStyles(currentElement);
    updateFontSummary();
});

darkBgColor.addEventListener('input', () => {
    darkBgColorValue.textContent = darkBgColor.value;
    saveCurrentSettings();
    applyElementStyles(currentElement);
    updateFontSummary();
});

resetLightColor.addEventListener('click', () => {
    const defaultColor = defaultSettings[currentElement].lightColor;
    lightColor.value = defaultColor;
    lightColorValue.textContent = defaultColor;
    saveCurrentSettings();
    applyElementStyles(currentElement);
    updateFontSummary();
});

resetDarkColor.addEventListener('click', () => {
    const defaultColor = defaultSettings[currentElement].darkColor;
    darkColor.value = defaultColor;
    darkColorValue.textContent = defaultColor;
    saveCurrentSettings();
    applyElementStyles(currentElement);
    updateFontSummary();
});

resetLightBgColor.addEventListener('click', () => {
    const defaultBg = defaultSettings[currentElement].lightBgColor || 'transparent';
    if (defaultBg === 'transparent') {
        lightBgColor.value = '#ffffff';
        lightBgColorValue.textContent = 'transparent';
    } else {
        lightBgColor.value = defaultBg;
        lightBgColorValue.textContent = defaultBg;
    }
    saveCurrentSettings();
    applyElementStyles(currentElement);
    updateFontSummary();
});

resetDarkBgColor.addEventListener('click', () => {
    const defaultBg = defaultSettings[currentElement].darkBgColor || 'transparent';
    if (defaultBg === 'transparent') {
        darkBgColor.value = '#1a1a1a';
        darkBgColorValue.textContent = 'transparent';
    } else {
        darkBgColor.value = defaultBg;
        darkBgColorValue.textContent = defaultBg;
    }
    saveCurrentSettings();
    applyElementStyles(currentElement);
    updateFontSummary();
});

// Content background event listeners
contentLightBg.addEventListener('input', () => {
    contentBgSettings.lightBg = contentLightBg.value;
    contentLightBgValue.textContent = contentLightBg.value;
    applyContentBackground();
});

contentDarkBg.addEventListener('input', () => {
    contentBgSettings.darkBg = contentDarkBg.value;
    contentDarkBgValue.textContent = contentDarkBg.value;
    applyContentBackground();
});

resetContentLightBg.addEventListener('click', () => {
    contentBgSettings.lightBg = '#ffffff';
    contentLightBg.value = '#ffffff';
    contentLightBgValue.textContent = '#ffffff';
    applyContentBackground();
});

resetContentDarkBg.addEventListener('click', () => {
    contentBgSettings.darkBg = '#1a1a1a';
    contentDarkBg.value = '#1a1a1a';
    contentDarkBgValue.textContent = '#1a1a1a';
    applyContentBackground();
});

darkModeToggle.addEventListener('click', () => {
    // First save current settings to ensure they're preserved
    saveCurrentSettings();

    pageDarkMode = !pageDarkMode;

    if (pageDarkMode) {
        darkModeToggle.textContent = 'Dark Mode: On';
        document.body.classList.add('dark-mode');
    } else {
        darkModeToggle.textContent = 'Dark Mode: Off';
        document.body.classList.remove('dark-mode');
    }

    // Reapply styles with new mode (this only changes which colors are used in preview)
    applyAllStyles();
});

contentPreset.addEventListener('change', handlePresetChange);
previewToggle.addEventListener('click', toggleEditor);
resetElement.addEventListener('click', resetCurrentElement);
resetAll.addEventListener('click', resetAllSettings);
copySettings.addEventListener('click', copySettingsAsCSS);
exportSettings.addEventListener('click', exportSettingsAsJSON);
editContent.addEventListener('click', openEditor);
fullscreenToggle.addEventListener('click', enterFullscreen);
exitFullscreen.addEventListener('click', exitFullscreenMode);

// Live markdown editing
markdownEditor.addEventListener('input', () => {
    currentMarkdown = markdownEditor.value;
    renderMarkdown();
});

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    initializeFonts();
    loadElementSettings();
    updateSliderValues();
    renderMarkdown();
    updateFontSummary();
    loadFontLibraryFonts(); // Load Font Library fonts
    applyContentBackground();
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Escape key to exit fullscreen
    if (e.key === 'Escape' && fullscreenOverlay.style.display === 'block') {
        exitFullscreenMode();
    }

    if (e.ctrlKey || e.metaKey) {
        if (e.key === 'ArrowUp') {
            e.preventDefault();
            fontSize.value = Math.min(parseInt(fontSize.value) + 1, 120);
            updateSliderValues();
            saveCurrentSettings();
            applyElementStyles(currentElement);
            updateFontSummary();
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            fontSize.value = Math.max(parseInt(fontSize.value) - 1, 8);
            updateSliderValues();
            saveCurrentSettings();
            applyElementStyles(currentElement);
            updateFontSummary();
        }
    }
});