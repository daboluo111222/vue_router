// const path = require("path");
// const Webpack = require("webpack");
// const CleanWebpackPlugin = require("clean-webpack-plugin");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const VueLoaderPlugin = require("vue-loader/lib/plugin");
// const isDev = process.env.NODE_ENV === "development";
// const devAPI = '"http://localhost:8080"';
// const proAPI = '"http://localhost:3000"';

// module.exports = {
//   entry: "./src/main.js",
//   output: {
//     path: path.resolve(__dirname, "dist"),
//     filename: "main.js"
//   },
//   module: {
//     rules: [
//       {
//         test: /\.less$/,
//         loader: "style-loader!css-loader!postcss-loader!less-loader" // 从右到左执行，所以注意顺序
//       },
//       {
//         test: /\.vue$/,
//         loader: "vue-loader" // 从右到左执行，所以注意顺序
//       },
//       {
//         test: /\.css$/,
//         use: ["vue-style-loader", "css-loader"]
//       },
//       {
//         test: /\.js$/, // 匹配js文件
//         loader: "babel-loader",
//         exclude: path.resolve(__dirname, "node_modules"), //匹配时忽略这个目录，提高打包速度
//         include: path.resolve(__dirname, "src"), // 匹配时查找的范围
//         query: {
//           presets: ["env"]
//         }
//       },
//       {
//         test: /\.(gif|jpg|jpeg|png|svg)$/,
//         use: [
//           {
//             loader: "url-loader",
//             options: {
//               limit: 1024, //表示图片最大为1024KB
//               name: "[name].[ext]" // 生成的文件名
//             }
//           }
//         ]
//       }
//     ]
//   },
//   devServer: {
//     // 设置服务器访问的基本目录
//     contentBase: path.resolve(__dirname, "dist"), //最好设置成绝对路径
//     // 设置服务器的ip地址,可以是localhost
//     host: "localhost",
//     // 设置端口
//     port: 8080,
//     // 设置自动打开浏览器
//     open: true,
//     // 设置自动更新
//     hot: true
//   },
//   resolve: {
//     alias: {
//       vue$: "vue/dist/vue.esm.js"
//     }
//   },
//   plugins: [
//     require("autoprefixer"), //自动补全功能
//     new Webpack.HotModuleReplacementPlugin(),
//     new CleanWebpackPlugin(["dist"]), //传入数组,指定要删除的目录
//     new VueLoaderPlugin(),
//     new HtmlWebpackPlugin({
//       template: "./index.html", // 会与根目录下的index.html相关联，把根目录下index的东西都放到生成的HTML中
//       filename: "index.html", // 生成的HTML名，路径为上面output中的path，不填默认是index.html
//       title: "测试webpack",
//       hash: true,
//       chunks: ["main"], // 多页面分别引入自己的js
//       minify: {
//         collapseWhitespace: true, //折叠空白区域 也就是压缩代码
//         removeComments: true //移除HTML中的注释
//       }
//     }),
//     new Webpack.DefinePlugin({
//       "process.env": {
//         NODE_ENV: isDev ? '"development"' : '"production"',
//         API_HOST: isDev ? devAPI : proAPI
//       }
//     })
//   ]
// };

// 单入口文件
const path = require("path");
const Webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const isDev = process.env.NODE_ENV === "development";
const devAPI = '"http://localhost:8080"';
const proAPI = '"http://localhost:3000"';

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.less$/,
        loader: "style-loader!css-loader!postcss-loader!less-loader" // 从右到左执行，所以注意顺序
      },
      {
        test: /\.js$/, // 匹配js文件
        loader: "babel-loader",
        exclude: path.resolve(__dirname, "node_modules"), //匹配时忽略这个目录，提高打包速度
        include: path.resolve(__dirname, "src"), // 匹配时查找的范围
        query: {
          presets: ["env"]
        }
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      },
      {
        test: /\.(gif|jpg|jpeg|png|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 1024, //表示图片最大为1024KB
              name: "[name].[ext]" // 生成的文件名
            }
          }
        ]
      }
    ]
  },
  devServer: {
    // 设置服务器访问的基本目录
    contentBase: path.resolve(__dirname, "dist"), //最好设置成绝对路径
    // 设置服务器的ip地址,可以是localhost
    host: "localhost",
    // 设置端口
    port: 8090,
    // 设置自动打开浏览器
    open: true,
    // 设置自动更新
    hot: true
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js"
    }
  },
  plugins: [
    new Webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(["dist"]), //传入数组,指定要删除的目录
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: "./index.html", // 会与根目录下的index.html相关联，把根目录下index的东西都放到生成的HTML中
      filename: "index.html", // 生成的HTML名，路径为上面output中的path，不填默认是index.html
      title: "测试webpack",
      hash: true,
      chunks: ["main"], // 多页面分别引入自己的js
      minify: {
        collapseWhitespace: true, //折叠空白区域 也就是压缩代码
        removeComments: true //移除HTML中的注释
      }
    }),
    new Webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: isDev ? '"development"' : '"production"',
        API_HOST: isDev ? devAPI : proAPI
      }
    })
  ]
};
