module.exports = {
    apps: [
        {
            name: 'nuxt-app',
            exec_mode: 'cluster',
            instances: 'max', // yoki 1, agar bitta instansiya kerak bo'lsa
            script: './node_modules/nuxt/bin/nuxt.js',
            args: 'start'
        }
    ]
}
