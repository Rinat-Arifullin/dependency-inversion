interface MusicApi {
    getMusic(): string;
}


class MusicClient implements MusicApi{
    client: MusicApi;
    constructor(client: MusicApi) {
        this.client = client;
    }

    getMusic() {
        return this.client.getMusic();
    }
}

class YandexMusicClient implements MusicApi{
    getMusic(): string {
        return "YandexMusic getMusic";
    }
}

class VKMusicClient implements MusicApi{
    getMusic(): string {
        return "VKMusicClient getMusic";
    }
}
class AppleMusicClient implements MusicApi{
    getMusic(): string {
        return "AppleMusicClient getMusic";
    }
}


const client = new MusicClient(new VKMusicClient());
const yandexClient = new YandexMusicClient();

console.log(client.getMusic(), yandexClient.getMusic());
