module.exports = [
    {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'ng-annotate',
          'babel',
          'eslint-loader'
        ]
    },
    {
        test: /.json$/,
        loader: 'json'
    },
    {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
    },
    {
        test: /\.scss$/,
        loader: 'style!css!sass'
    },
    {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'raw'
    },
    {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
    },
    {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
    },
    {
        test: '\.jpg$',
        exclude: /node_modules/,
        loader: 'file-loader'
    },
    {
        test: '\.png$',
        exclude: /node_modules/,
        loader: 'url-loader?limit=8000'
    }
];
