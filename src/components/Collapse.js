import { useState } from 'react';
import classNames from 'classnames';

export default function Collapse({
									 children,
									 collapsedLabel = 'Свернуть',
									 expandedLabel = 'Развернуть'
								 }) {
	const [isCollapse, setIsCollapse] = useState(true)

	const toggleCollapse = () => {
		setIsCollapse(!isCollapse)
	}

	const classContent = classNames({
		content: true,
		collapse: isCollapse
	})

	return (
		<div className='collapse-container'>
			<button className="btn-collapse"
					onClick={toggleCollapse}>{isCollapse ? expandedLabel : collapsedLabel}</button>
			<div className={classContent}>
				{children}
			</div>
		</div>
	)
}
