function make_album(artist: string, title: string, tracks?: number) {
    const album: { artist: string, title: string, tracks?: number } = {
        artist: artist,
        title: title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}

let album1 = make_album("Artist 1", "Album Title 1", 22);
console.log(album1);

let album2 = make_album("Artist 2", "Album Title 2", 33);
console.log(album2);

let album3 = make_album("Artist 3", "Album Title 3", 12)

