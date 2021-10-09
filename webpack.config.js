const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");



module.exports = {
    // メインとなるJavaScriptファイル（エントリーポイント）
    entry: `./src/js/index.js`,
  
    // ファイルの出力設定
    output: {
      //  出力ファイルのディレクトリ名
      path: `${__dirname}/dist`,
      // 出力ファイル名
      filename: "main.bundle.js"
    },

    
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules\/(?!(dom7|ssr-window|swiper)\/).*/,
                use: ["babel-loader"]
            },
            // {
            //     test: /\.(gif|png|jpg)$/,
            //     loader: 'file-loader'
            // },
            {
                test: /\.html$/,
                use: 'html-loader'

            },
            { 
                test: /\.(svg|ico|png|webp|jpg|gif|jpeg)$/, 
                //type: 'asset' 
            },{
                test: /\.scss$/i,
                use: [{
                    loader:MiniCssExtractPlugin.loader, 
                    options: {
                        publicPath: '//localhost:8080/'
                    }
                    },
                    {
                        loader:"css-loader",
                        options:{
                            url:false
                        }
                    },
                    {
                        loader: "sass-loader"
                    }]      
            },

        ]
        },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        }),
        new MiniCssExtractPlugin()
        ],
    
    mode: "development",
    // ローカル開発用環境を立ち上げる
    // 実行時にブラウザが自動的に localhost を開く
    devServer: {
        static: "dist",
        open: true,
        hot:true
    }

    
};

  