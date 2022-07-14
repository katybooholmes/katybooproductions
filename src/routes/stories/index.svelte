<script lang='ts'>
    import ContactBottom from "$lib/ContactBottom.svelte";
import Navbar from "$lib/Navbar.svelte";

    const vidItems = [
        { link: "https://player.vimeo.com/video/542459034?h=b8f198bd58", title: "2019 WW Tour Charlotte" , p1: "I wrote and produced this series of videos for Oprah’s national tour in Charlotte, NC. "},
        { link: "https://player.vimeo.com/video/568251432?h=bc831c44fc", title: "Element KB" , p1: "I produced this promotional video to showcase the cool vibe at Minneapolis North Loop.", p2: "DP: Luke Logan"},
        { link: "https://player.vimeo.com/video/61976592?h=25d44a07a7", title: "Wild Rice" , p1: "I wrote and produced this story about the art of wild ricing featuring Minnesota native poet Jim Northrop."},
        { link: "https://player.vimeo.com/video/171793265?h=c844bce4eb", title: "Optum Nurse" , p1: "This video captures the heart and mission of an Optum nurse who cares for patients near and far."},
        { link: "https://player.vimeo.com/video/568255131?h=37a0ac51d6", title: "Somerset KB" , p1: "I wrote and produced this video to celebrate the 100th birthday of Somerset Country Club, called a love letter to their home away from home.", p2: "DP: Luke Logan"},
    ];

</script>

<Navbar />


<div class="grid grid-cols-1 justify-center place-content-center px-8 md:px-32 py-16">
    {#each vidItems as item}
    <iframe class="w-full aspect-video" title="{item.title}" src="{item.link}" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
    <p class="text-center w-full my-8 text-xl">{item.p1}<br>{item.p2}</p> 
    <div class="border-t-2 w-full my-8 border-bggold"></div>  
    {/each}
</div>
<ContactBottom />