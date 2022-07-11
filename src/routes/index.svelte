<script lang="ts">
    // import logo from './assets/svelte.png'
    import Navbar from '$lib/Navbar.svelte'
  </script>
  
  <Navbar />
  
  <main>
    <div class="bg-bggray text-center py-4">
      <hr class="py-4 mx-4 border-t-2">
      <h1 class="text-3xl md:text-6xl text-titleblue font-serif font-bold">
        Katy Boo Productions
      </h1>
      <h2 class="text-3xl text-titleblue font-sans font-normal py-4">
        Writer - Producer - Content Strategist
      </h2>
    </div>
    <div class="grid p-2 md:p-16 bg-[url('/images/bg1.jpg')] bg-top bg-fixed grid-cols-1 md:grid-cols-2">
      <div></div>
      <div class="bg-bggold my-4 py-8 text-white text-xl px-8">
          I'd like to help tell your story.<br><br>
  
          I produce impactful stories guided by brand strategy that inform and engage.<br><br>
    
          I research intricate topics in preparation to interview SMEs, ask incisive questions, digest complex information and package key messages for internal and external audiences.<br><br>
    
          My journalism background is the foundation for excellent communication skills, inspired and accurate writing, organization, and professionalism under pressure.<br><br>
    
          I bring a combination of curiosity, integrity and tenacity to all my ventures.<br><br>
    
          Let's work together on your next project.<br><br>
      </div>
    </div>
    <div class="py-8 text-center">
      <h1 class="text-5xl text-titlegray font-serif mb-8">I have experience in the following</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 m-4">
        <div class="bg-bggray p-8 text-lg text-left text-bodygray">
          <h1 class="text-center text-2xl text-titlegray font-serif pb-4">Producer</h1>
          <ul class="list-disc text-lg font-sans">
            <li>Research emotionally driven stories about marginalized individuals and produced videos in multiple cities for <strong>Oprah’s</strong> 2020 Vision National Tour</li>
            <li>Organize multi-day shoot, interviewe dozens of stakeholders from C-Suiters on down for impactful <strong>branded videos</strong></li>
            <li>Produced emotionally driven video and <strong>live event</strong> that drew record attendance and raised record funds for Gigi’s Playhouse (Down Syndrome Achievement Center)</li>
          </ul>
          <br>
          Clients: UnitedHealth Group, Oprah, National Geographic, Bind Insurance, Element Hotel, Somerset Country Club
        </div>
        <div class="bg-bggray p-8 text-lg text-left text-bodygray">
          <h1 class="text-center text-2xl text-titlegray font-serif pb-4">Writer</h1>
          <ul class="list-disc text-lg font-sans">
            <li>Media pitches, website content, scripts, feature stories, Powerpoint presentations, blogs</li>
            <li>Digest <strong>complex health care issues</strong> and break it down to understandable language for internal and external audiences</li>
            <li>Research and gather information from variety of sources for informed <strong>case studies</strong></li>
            <li>Researched locations world-wide for <em>Bizarre Foods: Delicious Destinations</em> and managed international fixers and collaborated with crews</li>
          </ul>
          <br>
          Clients: Carlson Hotels, Tennant Company, Optum
        </div>
        <div class="bg-bggray p-8 text-lg text-left text-bodygray">
          <h1 class="text-center text-2xl text-titlegray font-serif pb-4">Public Relations</h1>
          <ul class="list-disc text-lg font-sans">
            <li><strong>Coach SMEs</strong> for effective video and/or live performances</li>
            <li>Produce emotionally driven video and direct crew for live auction and event that <strong>drew record attendance</strong> and <strong>surpassed anticipated proceeds</strong></li>
            <li>Employ best journalism practices</li>
            <li>Maintain relationships with local and regional media</li>
            <li>Maximize online traffic and engagement through targeted <strong>social media</strong> posts</li>
          </ul>
          <br>
          Clients: Optum, Gigi's Playhouse, Carlson Hotels
        </div>
        <div class="bg-bggray p-8 text-lg text-left text-bodygray">
          <h1 class="text-center text-2xl text-titlegray font-serif pb-4">Content Strategist</h1>
          <ul class="list-disc text-lg font-sans">
            <li>Develop and implement strategies to promote and execute annual <strong>fundraising</strong> for Down Syndrome Achievement Center</li>
            <li>Identify objectives and tailor messaging for multiple channels based on defined communications strategies</li>
            <li>Define business metrics, create actionable plans to help brands reach intended audiences and <strong>achieve goals</strong></li>
          </ul>
          <br>
          Clients: Optum, Gigi's Playhouse, Tennant Company, Carlson Hotels
        </div>
      </div>
    </div>
    <div>
      <div class="h-full md:h-96 w-full overflow-hidden">
        <img src="/images/bg2.jpg" alt="">
      </div>
      <div class="bg-bggold p-8 text-5xl text-bold font-serif text-white text-center">Let's talk about how I can help with your next project.
        <br>
        <br>
        <button class="font-sans text-2xl w-full text-bggold bg-white p-4" href="/contact">Contact</button>
      </div>
    </div>
    
  </main>
  
  