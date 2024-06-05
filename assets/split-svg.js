import fs from "fs";
import * as cheerio from "cheerio";
import prettier from "prettier";

(async () => {
  // 读取包含多个 SVG 图标的文件
  const svgFilePath = "./icons.svg";
  const svgFileContent = fs.readFileSync(svgFilePath, "utf-8");

  // 使用 cheerio 加载 SVG 文件内容
  const $ = cheerio.load(svgFileContent, {
    xmlMode: true,
  });

  // 获取所有的 symbol 元素
  const symbols = $("symbol");

  // 为每个 symbol 创建一个单独的 SVG 文件
  for (const symbol of symbols) {
    const symbolId = $(symbol).attr("id").replace("icon-", "");

    // 获取 symbol 的子元素
    const symbolContent = $(symbol).html();

    // 获取 viewBox 属性值
    const viewBox = $(symbol).attr("viewBox");

    // 包装成单独的 SVG 文件内容
    const singleSvgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}">${symbolContent}</svg>`;

    // 定义输出文件路径和文件名
    const outputFilePath = `icons/${symbolId}.svg`;

    // 确保输出目录存在
    fs.mkdirSync("output", { recursive: true });

    // 格式化 SVG 文件内容
    const formattedSvgContent = await prettier.format(singleSvgContent, {
      parser: "html",
    });

    // 写入单独的 SVG 文件
    fs.writeFileSync(outputFilePath, formattedSvgContent, "utf-8");

    console.log(`Created: ${outputFilePath}`);
  }

  console.log("All symbols have been split into separate SVG files.");
})();
