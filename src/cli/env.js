const parseEnv = () => {
    const {env} = process;

    const rssKeys = Object.keys(env).filter((key) => key.startsWith('RSS_'));
    const result = rssKeys.map(key => `${key}=${env[key]}`).join('; ');
    console.log(result);
};

parseEnv();