export const positionSelectorAll = (state) => state.position;

export const selectVisiblePosition = (state, filters = []) => {
if(filters.length === 0) return state.position;

return state.position.filter(pos => {
    const podtFilter = [].concat(pos.role, pos.level, ...pos.languages, ...pos.tools);
    
    return filters.every(filter => podtFilter.includes(filter));
})
}