import { createElement, useEffect, useRef } from '@wordpress/element'

const BlockWidgetArea = ({
	value,
	option,
	option: { sidebarId = 'ct-footer-sidebar-1' },
	onChange,
}) => {
	const parentEl = useRef()

	useEffect(() => {
		const sectionId = `widgetAreaSection-${sidebarId}`

		const widgetsToMove = Object.keys(wp.customize.control._value).filter(
			(id) => {
				if (id.indexOf('widget_') !== 0) {
					return false
				}

				return (
					wp.customize.control(id).section() ===
					`sidebar-widgets-${sidebarId}`
				)
			}
		)

		console.log('here', { widgetsToMove, sectionId })

		return () => {}
	}, [])

	return <div className="ct-option-widget-area" ref={parentEl}></div>
}

export default BlockWidgetArea
