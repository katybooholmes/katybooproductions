<script lang="ts">
    import ContactBottom from '$lib/ContactBottom.svelte'
import Navbar from '$lib/Navbar.svelte'

    let sayItems = [
        {quote: "Enthusiastic. Engaging. Confident. Katy is all that and more. She’s a disciplined worker, a great listener and she “gets it”. She’s one of those rare gems who can join a team and find a way to help raise everyone’s game. I’m proud to know her and call her a friend.", 
        saidBy1: "Alina Perez-Campos",
        saidBy2: "Executive Producer, Amazon Devices",
        href: "https://www.linkedin.com/in/alinaperezcampos"},
        {quote: "I had the pleasure of working with Katy for several years at KSTP and also with her more recently as a freelance writer and field producer. She is absolutely exceptional to work with. Not only is Katy kind hearted and professional, but she understands the heart and mission of the story and delivers every time. I trust her implicitly when I am working with her as she is a real team collaborator. The end product always exceeds the clients expectations as she delivers more than she promises. Not only do I enjoy her positive can-do attitude but clients do as well. I highly recommend Katy for your marketing communications needs!", 
        saidBy1: "Mark Anderson",
        saidBy2: "Chief Storyteller at Creative Soul Video | 20-plus Emmy Award Winner",
        href: "https://www.linkedin.com/in/creativesoulvideo"},
        {quote: "If you're video project requires someone to get things done well, on time and with a smile, then you need to hire Katy Boo. I have worked with Katy on a number of occasions. She is ALWAYS prepared, a quick learner, able read people and situations and quite frankly, a lot of fun to be around.", 
        saidBy1: "Rod Rassman",
        saidBy2: "Branded Video Content Creator at Rassman Media Group",
        href: "https://www.linkedin.com/in/rodrassman"},
    ]

</script>

<Navbar />

<div class="grid grid-cols-1 py-8 px-8 md:px-32 xl:px-64 bg-bggray">
    {#each sayItems as item}
    <div class="border-b-2 border-bggold border-t-2 font-serif p-8">
        "{item.quote}"
        <br>
        <div class="text-end w-full mt-2">
            <a class="text-titleblue text-3xl font-serif hover:underline" href="{item.href}">{item.saidBy1}</a>
            <h2 class="text-titleblue text-xl font-serif">{item.saidBy2}</h2>
        </div>
    </div>
    {/each}
</div>
<ContactBottom />