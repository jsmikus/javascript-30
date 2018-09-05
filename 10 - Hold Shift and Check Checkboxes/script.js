let lastItem;
const items = Array.from(document.querySelectorAll(".inbox input[type=\"checkbox\"]"));

function selectMultipleItems() {
    items.forEach( item => item.addEventListener( 'click', e => {
        if (!lastItem) {
            lastItem = item;
            return;
        }

        if (e.shiftKey) {
            const start = items.indexOf(item);
            const end = items.indexOf(lastItem);

            items
                .slice(Math.min(start,end), Math.max(start, end) + 1)
                .forEach(item => item.checked = lastItem.checked);
        }

        lastItem = item;
    }));
}

selectMultipleItems();

