import React from 'react';

interface ListProps<T> {
	items: T[];
	sourceName: string;
	ItemComponent: React.FC<any>;
	className: string;
}

const List = <T,>({ items, sourceName, ItemComponent, className }: ListProps<T>) => {
	return (
		<div className={`${className} overflow-hidden`}>
			{items && items.map((item, index) => {
				const props = { [sourceName]: item };
				return <ItemComponent key={index} {...props} />;
			})}
		</div>
	);
};

export default List;