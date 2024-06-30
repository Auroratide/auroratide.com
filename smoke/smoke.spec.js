const fail = () => {
    throw new Error('Failed to fetch auroratide.com')
}

fetch('https://auroratide.com').then((res) => {
    if (!res.ok) fail()

    return res.text()
}).then((html) => {
    if (!html.includes('<title>Coding + Storytelling | Auroratide</title>'))
        fail()
}).then(() => {
    console.log('Success!')
})
