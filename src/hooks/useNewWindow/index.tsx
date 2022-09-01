const useNewWindow = () => {
    let aDom: HTMLAnchorElement | null = null;
    const aDomId = document.getElementById('_newWindow') as HTMLAnchorElement;

    if (!aDomId) {
        aDom = document.createElement('a');
        aDom.id = '_newWindow';
    } else {
        aDom = aDomId;
    }

    const deteleDom = () => {
        aDom && aDom.remove();
    };

    const toNewWindow = (url: string) => {
        if (!url || !aDom) return;
        aDom.target = '_blank';
        aDom.style.display = 'none';
        aDom.href = url;
        aDom && aDom.click();
        deteleDom();
    };
    return { toNewWindow };
};

export default useNewWindow;
