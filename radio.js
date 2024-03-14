const apiUrl=` https://mp3quran.net/api/v3/radios`;
const language=`ar`;
async function getRadio() {
    const res = await fetch(` ${apiUrl}/radios?language=${language}`)
    const data = await res.json()
    console.log(data);
}
getRadio()