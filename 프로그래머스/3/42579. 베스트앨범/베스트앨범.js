function solution(genres, plays) {
    var answer = [];
    let genreCount = {};
    let genre = {};
    for (let i = 0; i < genres.length; i++) {
        if (genreCount[genres[i]]) genreCount[genres[i]] += plays[i];
        else genreCount[genres[i]] = plays[i];
        
        if (!genre[genres[i]]) genre[genres[i]] = [];
        genre[genres[i]].push({no:i, plays:plays[i]});
    }
    let sortedGenre = Object.keys(genre).sort((a,b) => genreCount[b] - genreCount[a]);
    
    for (let i = 0; i < sortedGenre.length; i++) {
        let sortedSong = genre[sortedGenre[i]].sort((a,b) => {
            if (a.plays === b.plays) return a.no - b.no;
            return b.plays - a.plays;
        })
        answer.push(sortedSong[0].no);
        if (sortedSong.length > 1) answer.push(sortedSong[1].no);
    }
    return answer;
}