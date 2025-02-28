# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Project setup
>
> [!IMPORTANT]  
> Vite requires **Node.js 14.18+ or 16+**.
> If your version (`node -v`) is outdated, upgrade it:  
> `nvm install --lts` and
> `nvm use --lts`

``` bash
npm create vite@latest
npm i bootstrap@5.3.3 axios react-hook-form react-loading react-router-dom@6 @reduxjs/toolkit react-redux gh-pages sass-embedded
```

### Recommand for dev (Optional)

``` bash
npm install eslint eslint-config-prettier eslint-plugin-react --save-dev
npm install --save-dev @commitlint/config-conventional @commitlint/cli husky lint-staged
npm install --save-dev  -g gitmoji-cli
```

### Packages Used in This Project

Here are the packages used in this project:

| Package               | npm Link                                        | Documentation Link                     | Used for                           |
|-----------------------|------------------------------------------------|----------------------------------------|------------------------------------|
| **Swiper**            | [swiper](https://www.npmjs.com/package/swiper)  | [Swiper Documentation](https://swiperjs.com/) | Image and content carousel.         |
| **React Fast Marquee**| [react-fast-marquee](https://www.npmjs.com/package/react-fast-marquee) | [React Fast Marquee Documentation](https://www.react-fast-marquee.com/) | Scrolling marquee effect for text and image. |
