import daisyui from "daisyui";
module.exports = {
  //...
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark"], // false: 仅亮+暗 | true：所有主题 |数组：像这样的特定主题 [“light”、“dark”、“cupcake”]
    darkTheme: "dark", // 暗模式包含的主题之一的名称
    base: true, // 默认为根元素应用背景色和前景色
    styled: true, // 包括所有组件的 daisyUI 颜色和设计决策
    utils: true, // 添加响应式和修饰符实用程序类
    prefix: "", // daisyUI 类名的前缀（组件、修饰符和响应式类名。不是颜色）
    logs: true, // 在构建 CSS 时在控制台中显示有关 daisyUI 版本和使用的配置的信息
    themeRoot: ":root", // 接收主题颜色 CSS 变量的元素
  },
};
