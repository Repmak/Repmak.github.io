import { useEffect } from 'react';

export function useDocumentMetadata({ title, description, favicon }) {
    useEffect(() => {
        if (title) document.title = title;

        if (description) {
            let metaDesc = document.querySelector('meta[name="description"]');
            if (!metaDesc) {
                metaDesc = document.createElement('meta');
                metaDesc.name = "description";
                document.head.appendChild(metaDesc);
            }
            metaDesc.setAttribute('content', description);
        }

        if (favicon) {
            let link = document.querySelector("link[rel*='icon']");
            if (!link) {
                link = document.createElement('link');
                link.rel = 'icon';
                document.head.appendChild(link);
            }
            link.href = favicon;
        }

    }, [title, description, favicon]);
}
