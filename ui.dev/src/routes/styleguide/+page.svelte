<script>
	import Header from "../../components/global/header.svelte";
	import Footer from "../../components/global/footer.svelte";
	import TableComponent from "../../components/table-component.svelte";
	import Breadcrumbs from "../../components/breadcrumbs.svelte";
</script>
<Header />
<main>

<Breadcrumbs />
<section class="section-frame">
	<div class="margin-container">
		<h1>Generic Table</h1>
		<TableComponent />
	</div>
</section><!-- /section-frame -->

<section class="section-frame">
	<div class="margin-container">
		<h1>Buttons</h1>
		<p>
			<a href="#" class="btn btn-primary">Primary Button</a> 
			<a href="#" class="btn btn-primary arrow">Primary Button</a> 
			<a href="#" class="btn btn-primary disabled">Primary Button Disabled</a> 
			<a href="#" class="btn btn-primary arrow disabled">Primary Button Disabled</a>
		</p>
		<p>
			<a href="#" class="btn btn-secondary">Secondary Button</a> 
			<a href="#" class="btn btn-secondary arrow">Secondary Button</a>
			<a href="#" class="btn btn-secondary disabled">Secondary Button Disabled</a> 
			<a href="#" class="btn btn-secondary arrow disabled">Secondary Button Disabled</a>
		</p>
	</div><!--/margin-container -->
</section>
<section class="section-frame sct-primary">
	<div class="margin-container">
		<p>
			<a href="#" class="btn btn-primary">Primary Button</a>
			<a href="#" class="btn btn-primary arrow">Primary Button</a>
			<a href="#" class="btn btn-primary disabled">Primary Button Disabled</a>
			<a href="#" class="btn btn-primary arrow disabled">Primary Button Disabled</a>
		</p>
		<p>
			<a href="#" class="btn btn-secondary">Secondary Button</a>
			<a href="#" class="btn btn-secondary arrow">Secondary Button</a>
			<a href="#" class="btn btn-secondary disabled">Secondary Button Disabled</a>
			<a href="#" class="btn btn-secondary arrow disabled">Secondary Button Disabled</a>
		</p>
	</div>
</section>
<section class="section-frame sct-secondary">
	<div class="margin-container">
		<p>
			<a href="#" class="btn btn-primary">Primary Button</a>
			<a href="#" class="btn btn-primary arrow">Primary Button</a>
			<a href="#" class="btn btn-primary disabled">Primary Button Disabled</a>
			<a href="#" class="btn btn-primary arrow disabled">Primary Button Disabled</a>
		</p>
		<p>
			<a href="#" class="btn btn-secondary">Secondary Button</a>
			<a href="#" class="btn btn-secondary arrow">Secondary Button</a>
			<a href="#" class="btn btn-secondary disabled">Secondary Button Disabled</a>
			<a href="#" class="btn btn-secondary arrow disabled">Secondary Button Disabled</a>
		</p>
	</div>
</section>
<section class="section-frame">
	<div class="margin-container">
		<h1>Small Buttons</h1>
		<p>
			<a href="#" class="btn btn-primary small">Primary Button</a> 
			<a href="#" class="btn btn-primary small disabled">Primary Button Disabled</a> 
		</p>
		<p>
			<a href="#" class="btn btn-secondary small">Secondary Button</a> 
			<a href="#" class="btn btn-secondary small disabled">Secondary Button Disabled</a> 
		</p>
	</div>
</section>
<section class="section-frame sct-primary">
	<div class="margin-container">
		<p>
			<a href="#" class="btn btn-primary small">Primary Button</a>
			<a href="#" class="btn btn-primary small disabled">Primary Button Disabled</a>
		</p>
		<p>
			<a href="#" class="btn btn-secondary small">Secondary Button</a>
			<a href="#" class="btn btn-secondary small disabled">Secondary Button Disabled</a>
		</p>
	</div>
</section>
<section class="section-frame sct-secondary">
	<div class="margin-container">
		<p>
			<a href="#" class="btn btn-primary small">Primary Button</a>
			<a href="#" class="btn btn-primary small disabled">Primary Button Disabled</a>
		</p>
		<p>
			<a href="#" class="btn btn-secondary small">Secondary Button</a>
			<a href="#" class="btn btn-secondary small disabled">Secondary Button Disabled</a>
		</p>
	</div>
</section>
<section class="section-frame">
	<div class="margin-container">
		<h1>Headline H1</h1>
		<h2>Headline H2</h2>
		<h3>Headline H3</h3>
		<h4>Headline H4</h4>
		<h5>Headline H5</h5>
		<h6>Headline H6</h6>
		<h1 class="h3">This is an H1 using the H3 style.</h1>
		<h1>Insurance coverage <span class="focal-text">you can count on.</span></h1>
		<p>This is sample text with a <a href="#">default content link</a>.</p>
		<p>Insurance coverage Brown is such a nice color. There are no mistakes. You can fix anything that happens. A fan brush is a fantastic piece of equipment. Use it. Make friends with it. A tree needs to be your friend if you're going to paint him. You can't have light without dark. You can't know happiness unless you've known sorrow. Play with the angles.</p>
	</div>
</section>
<section class="section-frame sct-primary">
	<div class="margin-container">
		<h1>Headline H1</h1>
		<h2>Headline H2</h2>
		<h3>Headline H3</h3>
		<h4>Headline H4</h4>
		<h5>Headline H5</h5>
		<h6>Headline H6</h6>
		<h1 class="h3">This is an H1 using the H3 style.</h1>
		<h1>Insurance coverage <br /><span class="focal-text">you can count on.</span></h1>
		<p>This is sample text with a <a href="#">default content link</a>.</p>
	</div>
</section>
<section class="section-frame sct-secondary">
	<div class="margin-container">
		<h1>Headline H1</h1>
		<h2>Headline H2</h2>
		<h3>Headline H3</h3>
		<h4>Headline H4</h4>
		<h5>Headline H5</h5>
		<h6>Headline H6</h6>
		<h1 class="h3">This is an H1 using the H3 style.</h1>
		<h1>Insurance coverage <span class="focal-text">you can count on.</span></h1>
		<p>This is sample text with a <a href="#">default content link</a>.</p>
	</div>
</section>
</main>

<Footer />

<style lang="scss">
	.btn {
		margin-bottom: 2.0rem;
	}
	h1, h2 {
		margin: 3.0rem 0;
	}
</style>
