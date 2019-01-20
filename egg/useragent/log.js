module.exports = options => {
    console.log(options.format);
    if (!options.format) {
        console.log('需要传递format函数')
    }
    return async (ctx, next) => {
        console.log(options.format(ctx.url));
        await next();
    }
}

