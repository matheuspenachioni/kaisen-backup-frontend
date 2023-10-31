import { VIEW_MODE, ViewModeKeys } from '@pages/index'
import styles from './ChapterConfigs.module.css'
import { ReactComponent as HorizontalIcon } from '@assets/icons/horizontal-icon.svg'
import { ReactComponent as VerticalIcon } from '@assets/icons/vertical-icon.svg'
import { ReactComponent as ZoomInIcon } from '@assets/icons/zoom-in-icon.svg'
import { ReactComponent as ZoomOutIcon } from '@assets/icons/zoom-out-icon.svg'
import { useBreakpoints } from '@hooks/index'

export function ChapterConfigs({
	onChangeViewMode,
	onChangeZoom,
	currentViewMode,
	currentZoom
}: {
	onChangeViewMode: (viewMode: (typeof VIEW_MODE)[ViewModeKeys]) => void
	onChangeZoom: (zoom: 'positive' | 'negative') => void
	currentZoom: number
	currentViewMode: (typeof VIEW_MODE)[ViewModeKeys]
}) {
	const { isMobile } = useBreakpoints()

	if (!isMobile) {
		return (
			<main className={styles.container}>
				<button
					type="button"
					className={styles.button}
					onClick={() =>
						onChangeViewMode(currentViewMode === VIEW_MODE.ALL_AT_ONCE ? VIEW_MODE.PAGE_BY_PAGE : VIEW_MODE.ALL_AT_ONCE)
					}
				>
					{currentViewMode === VIEW_MODE.ALL_AT_ONCE ? (
						<HorizontalIcon className={styles.icon} />
					) : (
						<VerticalIcon className={styles.icon} />
					)}
				</button>
				<div className={styles.zoomContainer}>
					<button type="button" className={styles.button} onClick={() => onChangeZoom('negative')}>
						<ZoomOutIcon className={styles.zoomIcon} />
					</button>
					{currentZoom * 100}%
					<button type="button" className={styles.button} onClick={() => onChangeZoom('positive')}>
						<ZoomInIcon className={styles.zoomIcon} />
					</button>
				</div>
			</main>
		)
	}

	return (
		<div className={styles.container}>
			<button
				type="button"
				className={styles.button}
				onClick={() =>
					onChangeViewMode(currentViewMode === VIEW_MODE.ALL_AT_ONCE ? VIEW_MODE.PAGE_BY_PAGE : VIEW_MODE.ALL_AT_ONCE)
				}
			>
				{currentViewMode === VIEW_MODE.ALL_AT_ONCE ? (
					<HorizontalIcon className={styles.icon} />
				) : (
					<VerticalIcon className={styles.icon} />
				)}
			</button>
		</div>
	)
}
