<script lang='ts'>

    import { onMount } from "svelte";

    let showMobileMenu: Boolean = false;

    const navItems = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Stories", href: "/stories" },
        { label: "Katy Boo Coaching", href: "/coaching" },
        { label: "Blog", href: "/blog" },
        { label: "What People Say", href: "/whatpeoplesay" },
        { label: "Contact", href: "/contact" },
    ];

</script>

<div class="static flex w-full md:sticky top-0 overflow-x-clip px-4 flex-col md:flex-row  bg-white justify-center align-center md:justify-start z-10">
    <nav class=" m-auto">
        <div class="flex w-full px-5 m-auto box-border items-center h-full">
            <ul class="flex flex-col md:flex-row">
                <svg
                   width="100"
                   height="100"
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
                {#each navItems as item}
                <li class="bg-white text-bggold my-2 md:m-2 md:p-2 md:my-6">
                    <a class="box-border hover:border-t-2 py-2 hover:border-b-2 " href={item.href}>{item.label}</a>
                    <hr class="visible md:hidden mt-4">
                </li>
                {/each}
            </ul>
        </div>
    </nav>
    
</div>