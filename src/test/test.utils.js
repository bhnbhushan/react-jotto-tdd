/**
 * Returns ShallowWrapper containing node(s) of the given data-test attribute value
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within
 * @param {string} attrValue - data-test attribute value
 * @returns 
 */
export const findByTestAttr = (wrapper, attrValue) => {
    return wrapper.find(`[data-test="${attrValue}"]`);
}