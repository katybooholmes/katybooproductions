<script lang="ts">
    import Navbar from "$lib/Navbar.svelte";
import { select_option, time_ranges_to_array } from "svelte/internal";

    let confirmCopy: string = "Click to copy"
    const copyEmail = () => {
        navigator.clipboard.writeText("katybooholmes@gmail.com");
        confirmCopy = "Copied!"
        sleep(2000).then( () => {
            confirmCopy = "Click to copy";
        });
    }

    function sleep(ms : number) {
        return new Promise(resolve => setTimeout(resolve,ms));
    }
    
</script>

<Navbar />

<div class="relative">
    <div class="bg-[url('/images/bg6.jpg')] bg-norepeat bg-center bg-cover w-full p-32 blur-sm">
    </div>
    <div class="absolute top-8 inset-x-0 w-full text-center text-white text-3xl font-serif">How can I illuminate <em>your</em> story</div>
</div>
<div class="grid grid-cols1 mt-16 md:grid-cols-2 gap-8 md:mx-32">
    <div class="mx-8">
        <img class="rounded-xl" src="/images/hs3.jpg" alt="">
    </div>
    <div class="my-16 mx-8">
        <h1 class="text-blue-400 font-bold text-lg">Phone: </h1>
        <h2>+1 (612) 719-7782</h2>
        <br>
        <h1 class="text-blue-400 font-bold text-lg">Email</h1>
        <button class="hover:underline" on:click="{copyEmail}">{confirmCopy}</button>
    </div>
</div>

<div class="w-full flex justify-center">
    <svg
       width="300"
       height="300"
       viewBox="0 0 300 300"
       version="1.1"
       id="svg5"
       class="pointer-events-none">
      <defs
         id="defs2">
        <marker
           style="overflow:visible"
           id="marker3167"
           refX="0"
           refY="0"
           orient="auto"
           markerWidth="5.6666665"
           markerHeight="5.6666665"
           viewBox="0 0 5.6666667 5.6666667"
           preserveAspectRatio="xMidYMid">
          <path
             transform="scale(0.5)"
             style="fill:context-stroke;fill-rule:evenodd;stroke:context-stroke;stroke-width:1pt"
             d="M 5,0 C 5,2.76 2.76,5 0,5 -2.76,5 -5,2.76 -5,0 c 0,-2.76 2.3,-5 5,-5 2.76,0 5,2.24 5,5 z"
             id="path3165" />
        </marker>
        <marker
           style="overflow:visible"
           id="Dot"
           refX="0"
           refY="0"
           orient="auto"
           markerWidth="5.6666665"
           markerHeight="5.6666665"
           viewBox="0 0 5.6666667 5.6666667"
           preserveAspectRatio="xMidYMid">
          <path
             transform="scale(0.5)"
             style="fill:context-stroke;fill-rule:evenodd;stroke:context-stroke;stroke-width:1pt"
             d="M 5,0 C 5,2.76 2.76,5 0,5 -2.76,5 -5,2.76 -5,0 c 0,-2.76 2.3,-5 5,-5 2.76,0 5,2.24 5,5 z"
             id="Dot1" />
        </marker>
      </defs>
      <g
         id="layer1">
        <text
           xml:space="preserve"
           style="font-size:55.7071px;text-align:center;text-anchor:middle;fill:#000000;stroke:#000000;stroke-width:0.464227"
           x="149.97214"
           y="134.12268"
           id="text186"><tspan
             x="149.97214"
             y="134.12268"
             style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-family:'Bodoni 72 Smallcaps';-inkscape-font-specification:'Bodoni 72 Smallcaps, ';text-align:center;text-anchor:middle;fill:#0d0e63;fill-opacity:1;stroke-width:0.464227"
             id="tspan400">Katy Boo</tspan><tspan
             x="149.97214"
             y="204.09236"
             style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-family:'Bodoni 72 Smallcaps';-inkscape-font-specification:'Bodoni 72 Smallcaps, ';text-align:center;text-anchor:middle;fill:#0d0e63;fill-opacity:1;stroke-width:0.464227"
             id="tspan404">Productions</tspan></text>
        <path
           style="fill:#0d0e63;fill-opacity:1;stroke:#ddae23;stroke-width:3;stroke-opacity:1;stroke-dasharray:none;marker-start:url(#Dot);marker-end:url(#marker3167)"
           d="m 14.372033,150 271.255947,-1e-5"
           id="path1904" />
      </g>
    </svg>
</div>