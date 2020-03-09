import React from "react";
import Column from "./Column";

class Grid extends React.Component {

	// TODO debounce fillCell

	render() {
		const board = this.props.board;
		const columns = [];

		for (let column = 0; column < board.length; ++column) {
			columns[column] = <Column column={column} rows={board[column]} onClick={() => this.props.fillCell(column)} />;
		}

		return (
            <div className="grid">
                {columns}
            </div>
        );
	}
}

export default Grid;