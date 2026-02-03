const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


// based off of: https://stackoverflow.com/a/60021512
const generateHtmlPlugin = (title) => {
    return new HtmlWebpackPlugin({
        // not sure what the function of this is
        title: `${title}`,
        // the path/URL entered to reach this page: "http://localhost:8080/{filename}"
        filename: `${title.toLowerCase()}/index.html`,
        // the html path in this project to link to the filename
        template: `./src/pages/${title.toLowerCase()}/index.html`,
    });
}
const populateHtmlPlugins = (pagesArray) => {
    const res = [];

    const home = new HtmlWebpackPlugin({
        title: "Home",
        template: "./src/pages/home/index.html",
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
        // the path/URL entered to reach this page: "http://localhost:8080/{filename}"
        filename: "src/header_footer/header.html",
        // the html path in this project to link to the filename
        template: "./src/header_footer/header.html",
    }),
    new HtmlWebpackPlugin({
        // not sure what the function of this is
        title: "Footer",
        // the path/URL entered to reach this page: "http://localhost:8080/{filename}"
        filename: "src/header_footer/footer.html",
        // the html path in this project to link to the filename
        template: "./src/header_footer/footer.html",
    }),
];


module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
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