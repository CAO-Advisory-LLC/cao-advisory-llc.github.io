const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


// based off of: https://stackoverflow.com/a/60021512
const generateHtmlPlugin = (title) => {
    return new HtmlWebpackPlugin({
        // not sure what the function of this is
        title: `${title}`,
        // post-bundling path to the html file (also the URL for the page): "dist/{filename}", "http://localhost:8080/{filename}"
        filename: `${title.toLowerCase()}/index.html`,
        // pre-bundling path to the html file
        template: `./src/pages/${title.toLowerCase()}/index.html`,
        // which js files (entries) will be run
        chunks: ["global", `${title.toLowerCase()}`],
    });
}
const populateHtmlPlugins = (pagesArray) => {
    const res = [];

    // this is declared separately from the other pages because path/URL template is different (the others are subpages, this is the main/root page)
    const home = new HtmlWebpackPlugin({
        title: "Home",
        filename: `index.html`,
        template: "./src/pages/home/index.html",
        chunks: ["global", "home"],
    });
    res.push(home);

    pagesArray.forEach(page => {
        res.push(generateHtmlPlugin(page));
    })
    return res;
}
const pages = populateHtmlPlugins(["About", "Process", "Resources", "Contact"]);
const header_footer = [
    new HtmlWebpackPlugin({
        // not sure what the function of this is
        title: "Header",
        // post-bundling path to the html file (also the URL for the page): "dist/{filename}", "http://localhost:8080/{filename}"
        filename: "header-footer/header.html",
        // pre-bundling path to the html file
        template: "./src/header-footer/header.html",
    }),
    new HtmlWebpackPlugin({
        title: "Footer",
        filename: "header-footer/footer.html",
        template: "./src/header-footer/footer.html",
    }),
];


module.exports = {
    entry: {
        global: "./src/global.js",
        home: "./src/pages/home/index.js",
        about: "./src/pages/about/index.js",
        process: "./src/pages/process/index.js",
        resources: "./src/pages/resources/index.js",
        contact: "./src/pages/contact/index.js",
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
        publicPath: '/',
    },
    devtool: "eval-source-map",
    devServer: {
        watchFiles: ["./src/pages/home/index.html"],
    },
    plugins: pages.concat(header_footer),
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
        ],
    },
};