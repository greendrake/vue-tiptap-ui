# Publishing vue-tiptap-ui to NPM

## Pre-Publication Checklist

✅ **Package Configuration**
- Package name: `vue-tiptap-ui`
- Version: `0.1.0` (initial release)
- License: MIT
- Repository links configured
- Peer dependencies properly set

✅ **Build Configuration**
- Library builds successfully with `yarn build:lib`
- Generates ES modules (`vue-tiptap-ui.es.js`)
- Generates UMD bundle (`vue-tiptap-ui.umd.js`)
- Includes CSS bundle (`vue-tiptap-ui.css`)
- `.npmignore` configured to include only necessary files

✅ **Dependencies**
- Core dependencies minimized (only `@floating-ui/vue`)
- Vue and TipTap marked as peer dependencies
- Development dependencies properly separated

## Publishing Steps

### 1. Final Build
```bash
yarn build:lib
```

### 2. Test Package Contents
```bash
npm pack --dry-run
```
This will show you exactly what files will be included in the package.

### 3. Login to NPM (if not already logged in)
```bash
npm login
```

### 4. Publish to NPM
```bash
npm publish
```

### 5. Verify Publication
- Check on https://npmjs.com/package/vue-tiptap-ui
- Test installation: `npm install vue-tiptap-ui`

## Post-Publication

### Create GitHub Release
1. Go to your GitHub repository
2. Create a new release with tag `v0.1.0`
3. Add release notes describing the initial features

### Update Documentation
- Update README with installation instructions
- Add usage examples
- Document all available components

## Future Releases

### Version Bumping
```bash
npm version patch  # for bug fixes (0.1.1)
npm version minor  # for new features (0.2.0)
npm version major  # for breaking changes (1.0.0)
npm publish
```

## Package Information

**What gets published:**
- `dist/` folder with built library files
- `package.json`
- `README.md`
- `LICENSE`

**What's excluded:**
- Source code (`src/`)
- Development configuration files
- Node modules and build artifacts
- Example/demo files

The package will be installable as:
```bash
npm install vue-tiptap-ui
```

And importable as:
```js
import { Button, MarkButton, HeadingButton } from 'vue-tiptap-ui'
``` 