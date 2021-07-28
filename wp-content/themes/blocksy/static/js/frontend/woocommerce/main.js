import { onDocumentLoaded } from '../../helpers'

export const wooEntryPoints = [
	{
		els: 'body.single-product .woocommerce-product-gallery',
		condition: () =>
			!!document.querySelector(
				'.woocommerce-product-gallery .ct-image-container'
			),
		load: () => import('./single-product-gallery'),
		trigger: ['hover-with-click'],
	},

	{
		els: 'form.variations_form',
		condition: () =>
			!!document.querySelector(
				'.woocommerce-product-gallery .ct-image-container'
			),
		load: () => import('./variable-products'),
		trigger: ['hover'],
	},

	{
		els: '.quantity',
		load: () => import('./quantity-input'),
		forcedEvents: ['ct:add-to-cart:quantity'],
		trigger: ['hover'],
	},

	{
		els: () => [
			...document.querySelectorAll('.ct-ajax-add-to-cart .cart'),
			...document.querySelectorAll('.ct-floating-bar .cart'),
		],
		load: () => import('./add-to-cart-single'),
		trigger: ['submit'],
	},

	{
		els: '.ct-header-cart',
		load: () => import('./mini-cart'),
		events: ['ct:header:update'],
		trigger: ['scroll'],
	},
]

onDocumentLoaded(() => {
	setTimeout(() => {
		let maybeShortcutCart = document.querySelector(
			'.ct-shortcuts-container [data-shortcut="cart"]'
		)

		if (maybeShortcutCart && !maybeShortcutCart.hasClickListener) {
			maybeShortcutCart.hasClickListener = true

			maybeShortcutCart.addEventListener('mouseover', (event) => {
				let maybeCart = document.querySelector(
					'.ct-header-cart .ct-offcanvas-trigger'
				)

				if (!maybeCart) {
					return
				}

				event.preventDefault()

				maybeCart.dispatchEvent(
					new MouseEvent('mouseover', {
						view: window,
						bubbles: true,
						cancelable: true,
					})
				)
			})

			maybeShortcutCart.addEventListener('click', (event) => {
				let maybeCart = document.querySelector(
					'.ct-header-cart .ct-offcanvas-trigger'
				)

				if (!maybeCart) {
					return
				}

				event.preventDefault()

				maybeCart.dispatchEvent(
					new MouseEvent('click', {
						view: window,
						bubbles: true,
						cancelable: true,
					})
				)
			})
		}
	}, 100)
})
