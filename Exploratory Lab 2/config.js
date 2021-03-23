var config = {
    style: 'mapbox://styles/fdenisco/cklpwe41x353x17qh88sjsw2w', // custom style url from https://studio.mapbox.com/
    accessToken: 'pk.eyJ1IjoiZmRlbmlzY28iLCJhIjoiY2trdm9jeHF4MTRzeTJwbjB1Mmx6aDhiMCJ9.bz1iVUzKe6YTln-cqMK42w',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: 'Mapping Maritime Museums',
    subtitle: 'Exploring the Museums of Washington state as noted by the Whale Trail',
    byline: 'By Fred DeNisco',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'whale-museum',
            alignment: 'left',
            hidden: false,
            title: 'The Whale Museum',
            image: './TWM.png',
            description: 'Mission: To promote stewardship of whales and the Salish Sea ecosystem through education and research.',
            location: {
                center: { lon: -123.01835, lat: 48.53455 },
                zoom: 13.05,
                pitch: 59.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'PTownstead-Science-Center',
            alignment: 'left',
            hidden: false,
            title: 'Port Townsend Science Center',
            image: './PTSC.png',
            description: 'The Port Townsend Marine Science Center (PTMSC) is an educational and scientific organization devoted to understanding and conserving our marine and shoreline environment.',
            location: {
                center: { lon: -122.76934, lat: 48.13897 },
                zoom: 11.42,
                pitch: 60.00,
                bearing: -17.43
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Langley-Whale-Center',
            alignment: 'left',
            hidden: false,
            title: 'Langley Whale Center',
            image: './LWC.png',
            description: 'Mission: To celebrate and share the lives of gray whales, orcas and other marine mammals of the Salish Sea.',
            location: {
                center: { lon: -122.41659, lat: 48.03629 },
                zoom: 10.91,
                pitch: 60.00,
                bearing: -62.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'Burke-Museum',
            alignment: 'left',
            hidden: false,
            title: 'The Burke Museum',
            image: './Burke.png',
            description: 'Mission: The Burke Museum cares for and shares natural and cultural collections so all people can learn, be inspired, generate knowledge, feel joy, and heal.',
            location: {
                center: { lon: -122.31086, lat: 47.65989 },
                zoom: 13.14,
                pitch: 60.00,
                bearing: -146.66
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
         {
            id: 'MaST',
            alignment: 'left',
            hidden: false,
            title: 'Marine Science and Technology Center',
            image: './MaST-Header-Image2.jpeg',
            description: 'Mission: To promote understanding, appreciation, and preservation of the marine environment through hands-on research, education, and community activities that highlights the beauty, complexity, and importance of the South Puget Sound ecosystem.',
            location: {
                center: { lon: -122.32676, lat: 47.34005 },
                zoom: 11.05,
                pitch: 60.00,
                bearing: 8.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'Westport-Maritime-Museum',
            alignment: 'left',
            hidden: false,
            title: 'Westport Maritime Museum',
            image: './WMM.png',
            description: 'Mission: To educate and interpret the maritime history of our coastal community and to advocate for the preservation of our local historical structures.',
            location: {
                center: { lon: -124.11045, lat: 46.90452 },
                zoom: 10.70,
                pitch: 60.00,
                bearing: -19.18
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
    ]
};
