<script>
    import Sidebar from "$lib/components/sidebar.svelte";
    import WorkViewer from "../../lib/components/work/workViewer.svelte";

</script>
<div class="content">
    <Sidebar image={false} title={"My Work"} content={"<p>I love working with clients to achieve their goals on the web. From the simplest landing page to large B2B websites, I want to make your vision a reality.</p> <p>I’m currently working full time at <a href='https://tattooprojects.com' target='_blank'>tattoo projects</a>, so if there’s a project that requires an agency, I have you covered there too ;)</p> <p>Interested in working together? <a href='/contact'>Contact me.</a></p>"}/> 
    <WorkViewer />
</div>