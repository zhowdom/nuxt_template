// 获取本机ip并启动服务
const os = require("os");
const interfaces = os.networkInterfaces();
let localIpAddress = "localhost";

Object.keys(interfaces).forEach(function (interFaceName) {
  interfaces[interFaceName]?.forEach(function (iface) {
    if ("IPv4" !== iface.family || iface.internal !== false) {
      return;
    }
    localIpAddress = iface.address;
  });
});

// 执行命令
const { exec } = require("child_process");
const cmd = `ionic cap run android --livereload-url=http://${localIpAddress}:3000 --external --target Pixel_3_API_30`
// const cmd = `ionic cap run android --livereload --external --mode development`
console.log(cmd);
exec(
  cmd,
  (error, stdout, stderr) => {
    if (error) {
      console.error(`执行出错: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
  },
);
