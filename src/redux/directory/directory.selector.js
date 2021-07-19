import { createSelector } from 'reselect';

const selectDirectory = (state) => state.directory;

export const SelectDirectorySessions = createSelector(
	[selectDirectory],
	(directory) => directory.sections
);
