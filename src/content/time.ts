export const time = async (name: string, action: () => Promise<void>) => {
    console.log(`Starting ${name}...`)
    const startTime = new Date().getTime()

    await action()

    const endTime = new Date().getTime()
    console.log(`...${name} done! Took ${(endTime - startTime) / 1000} seconds.`)
}
