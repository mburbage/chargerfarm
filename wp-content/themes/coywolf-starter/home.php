<?php get_header(); ?>
		<div class="intro">
			<div class="contain">
				<header>
					<h1>Starter Theme</h1>
					<p>You can change this text in the <code>head.php</code> file in the theme folder.</p>
				</header>
			</div>
		</div>
		<main>
			<section class="contain">
				<?php if (have_posts()) : ?>
				<?php while (have_posts()) : the_post(); ?>
					<?php $cat = get_the_category(); $cat_link = get_category_link( $cat[0]->cat_ID ); ?>
				<div class="newsfeed">
					<div class="thumbnail">
						<a href="<?php the_permalink(); ?>"><?php if ( has_post_thumbnail() ) {
						the_post_thumbnail();
						} else { ?>
						<img src="<?php bloginfo('template_directory'); ?>/images/fallback-image.png" alt="<?php the_title(); ?>" />
						<?php } ?></a>
					</div>
					<div class="snippet">
					<h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
						<?php echo '<p class="excerpt">' . get_the_excerpt() . '</p>'; ?>
						<div class="byline">
							<p class="author"><a href="<?php echo $cat_link ?>" class="tag <?php echo get_the_category( $id )[0]->slug; ?>"><?php echo get_the_category( $id )[0]->name; ?></a> <span>|</span> <time datetime="<?php the_time('c'); ?>"><?php the_time('m/j/Y g:ia'); ?></time></p>
						</div>
					</div>
				</div>
				<?php endwhile; ?>
				<nav class="pagination">
					<div class="older"><?php next_posts_link('&lt; Older Entries') ?></div>
					<div class="newer"><?php previous_posts_link('Newer Entries &gt;') ?></div>
				</nav>
				<?php else : ?>
				<h2 class="center">Not Found</h2>
				<p>Sorry, but you are looking for something that isn't here.</p>
				<?php endif; ?>
			</section>
		</main>
<?php get_footer(); ?>