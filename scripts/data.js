// Script for database

const lines = {
    1: {
        name: "Yamanote Line",
        japaneseName: "山手線",
        shortName: "JY",
        description: "The Yamanote Line (Japanese: 山手線, Yamanote-sen) is the loop service in Tokyo, Japan, operated by East Japan Railway Company (JR East). It is one of Tokyo's busiest and most important lines, connecting most of Tokyo's major stations and urban centres, including Marunouchi, the Yurakucho/Ginza area, Shinagawa, Shibuya, Shinjuku, Ikebukuro, and Ueno, with all but two of its 30 stations connecting to other railway or underground (subway) lines. ",
        color: "9acd32",
        images: [
            "./imgs/yamanoteLine-1.jpg",
            "./imgs/yamanoteLine-2.jpg",
            "./imgs/yamanoteLine-3.jpg",
            "./imgs/yamanoteLine-4.jpg",
            "./imgs/yamanoteLine-5.jpg",
        ],
        operator: 1,
        open: 1885,
        speed: 90,
        track: 1067,
        length: 34.5
    },
    2: {
        name: "Chuo-Sobu Line",
        japaneseName: "中央・総武緩行線",
        shortName: "JB",
        description: "The Chuo-Sobu Line (Japanese: 中央・総武緩行線, Hepburn: Chuo-Sobu-kanko-sen) is a railway line that runs through Tokyo and Chiba Prefecture, Japan. Part of the East Japan Railway Company (JR East) network, the line operates on separate tracks along the right-of-way of the Chuo Main Line (Chuo Line (Rapid)) and Sobu Main Line (Sobu Line (Rapid)), providing service between Mitaka Station in the cities of Mitaka and Musashino and Chiba Station in Chiba.",
        color: "FFD400",
        images: [
            "./imgs/sobuLine-1.jpg",
            "./imgs/sobuLine-2.jpg",
            "./imgs/sobuLine-3.jpg",
            "./imgs/sobuLine-4.jpg",
            "./imgs/sobuLine-5.jpg",
        ],
        operator: 1,
        open: 1932,
        speed: 90,
        track: 1067,
        length: 60.2
    },
    3: {
        name: "Joban Line",
        japaneseName: "常磐線",
        shortName: "JJ",
        description: "The Joban Line (Japanese: 常磐線, Japanese pronunciation: [Joban-sen]) is a railway line in Japan operated by the East Japan Railway Company (JR East). The line officially begins at Nippori Station in Arakawa, Tokyo before the line officially ends at Iwanuma Station in Iwanuma, Miyagi. However, following the opening of the Ueno–Tokyo Line, Joban Line train services originate at Shinagawa or Ueno; likewise, Joban Line trains continue past Iwanuma onto the Tohoku Main Line tracks to Sendai. The line approximately parallels the Pacific coasts of Chiba, Ibaraki, and Fukushima Prefectures.",
        color: "3CB371",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/6/69/Series-E531-K418.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/4/45/JREast-Joban-line-JJ08-Abiko-station-sign-20171228-061227.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/b/be/JR_J%C5%8Dban_Line_Ry%C5%ABgasakishi_Station_Platform.jpg",
            "https://live.staticflickr.com/2445/3839148360_9d47dc12d2_b.jpg",
        ],
        operator: 1,
        open: 1905,
        speed: 90,
        track: 1067,
        length: 368.0
    },
    4: {
        name: "Tozai Line",
        japaneseName: "東京メトロ千代田線",
        shortName: "T",
        description: "The Tokyo Metro Tozai Line (東京メトロ東西線, Tokyo Metoro Tozai-sen) is a rapid transit line in Tokyo and Chiba Prefecture, Japan, owned and operated by Tokyo Metro. Its name literally means East-West Line. The line runs between Nakano Station in Nakano, Tokyo and Nishi-Funabashi Station in Funabashi, Chiba. The Tozai Line was referred to as Line 5 during the planning stages, thus the seldom-used official name is Line 5 Tozai Line (5号線東西線, Go-go-sen Tozai-sen). On average, the line carries 1,642,378 passengers daily (2017), the highest of all lines in the Tokyo Metro network. On maps, diagrams and signboards, the Tozai Line is shown using the color 'sky blue' (T), and its stations are given numbers using the letter 'T'. ",
        color: "00b2dd",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/3/30/Tokyo-Metro_Series15000-15013.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/1/1c/Iidabashi_Station_platform_Tozai_Line_Feb_06_2020_02-50PM.jpeg",
            "https://upload.wikimedia.org/wikipedia/commons/8/80/Tokyometro05_-inside12th.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/1/11/JR_Chuo-Main-Line%E3%83%BBTokyo_Metro_Tozai-Line_Nakano_Station_Platform_3%E3%83%BB4.jpg",
        ],
        operator: 2,
        open: 1964,
        speed: 100,
        track: 1067,
        length: 30.8
    },
    5: {
        name: "Chiyoda Line",
        japaneseName: "常磐線",
        shortName: "C",
        description: "The Tokyo Metro Chiyoda Line (東京メトロ千代田線, Tokyo Metoro Chiyoda-sen) is a subway line owned and operated by Tokyo Metro in Tokyo, Japan. On average, the line carries 1,447,730 passengers daily (2017), the second highest of the Tokyo Metro network, behind the Tozai Line (1,642,378). The line was named after the Chiyoda ward, under which it passes. On maps, diagrams and signboards, the line is shown using the color green (C), and its stations are given numbers using the letter 'C'. ",
        color: "009944",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/c/cb/%E6%9D%B1%E4%BA%AC%E3%83%A1%E3%83%88%E3%83%AD16000%E7%B3%BB16021%E7%B7%A8%E6%88%90.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/7/7b/Tokyo_Metro_05-013F_Chiyoda_line_Kita-Ayase_branch_line_for_test_run.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tokyo_Metro_Chiyoda-Line_Kita-Senju_Station_Platform.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/e/e1/TokyoMetro-C19-Ayase-station-platform-20200403-135757.jpg",
        ],
        operator: 2,
        open: 1964,
        speed: 100,
        track: 1067,
        length: 24.0
    },
    6: {
        name: "Odawara Line",
        japaneseName: "小田急小田原線",
        shortName: "OH",
        description: "The Odakyu Odawara Line (小田急小田原線, Odakyu-Odawara-sen) is the main line of Japanese private railway operator Odakyu Electric Railway. It extends 82.5 km from Shinjuku in central Tokyo through the southwest suburbs to the city of Odawara, the gateway to Hakone in Kanagawa Prefecture. It is a busy commuter line and is also known for its 'Romancecar' limited express services. From Yoyogi-Uehara Station some trains continue onto the Tokyo Metro Chiyoda Line and beyond to the East Japan Railway Company Joban Line.",
        color: "00bfff",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/e/ec/Odakyu.type50000.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/1/17/Odakyu-electric-railway-Odawara-line-Ebina-station-platform-20130726-161802.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/1/13/Odakyu-electric-railway-Odawara-line-Kyodo-station-sign-20130517-150050.jpg",
        ],
        operator: 3,
        open: 1927,
        speed: 110,
        track: 1067,
        length: 82.5
    },
    7: {
        name: "Shinjuku Line",
        japaneseName: "新宿線",
        shortName: "S",
        description: "The Odakyu Odawara Line (小田急小田原線, Odakyu-Odawara-sen) is the main line of Japanese private railway operator Odakyu Electric Railway. It extends 82.5 km from Shinjuku in central Tokyo through the southwest suburbs to the city of Odawara, the gateway to Hakone in Kanagawa Prefecture. It is a busy commuter line and is also known for its 'Romancecar' limited express services. From Yoyogi-Uehara Station some trains continue onto the Tokyo Metro Chiyoda Line and beyond to the East Japan Railway Company Joban Line.",
        color: "6cbb5a",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/8/8b/Toei_Type10-300.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/5/54/Toei-subway-S07-Ogawamachi-station-platform-20191201-163722.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/f/fd/Jimbocho-Sta-A3.JPG",
            "https://upload.wikimedia.org/wikipedia/commons/7/72/Toei-subway-S12-Kikukawa-station-platform-20190831-144335.jpg",
        ],
        operator: 4,
        open: 1978,
        speed: 75,
        track: 1067,
        length: 23.5
    },
    8: {
        name: "Asakusa Line",
        japaneseName: "浅草線",
        shortName: "A",
        description: "The Odakyu Odawara Line (小田急小田原線, Odakyu-Odawara-sen) is the main line of Japanese private railway operator Odakyu Electric Railway. It extends 82.5 km from Shinjuku in central Tokyo through the southwest suburbs to the city of Odawara, the gateway to Hakone in Kanagawa Prefecture. It is a busy commuter line and is also known for its 'Romancecar' limited express services. From Yoyogi-Uehara Station some trains continue onto the Tokyo Metro Chiyoda Line and beyond to the East Japan Railway Company Joban Line.",
        color: "ec6e65",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/9/97/Toei-A01-Nishi-magome-station-platform.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/4/40/Takanawadai_Station_exit_2018_7_9.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/f/fe/Asakusa_line_-_Daimon_stn_ticket_gates_-_Jan_26_2018.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/0/0a/Asakusa_Station_Sign_%28Asakusa_Line%29.jpg",
        ],
        operator: 4,
        open: 1960,
        speed: 70,
        track: 1435,
        length: 18.3
    },
    9: {
        name: "Toei Oedo Line",
        japaneseName: "都営地下鉄大江戸線",
        shortName: "E",
        description: "The Toei Oedo Line (都営地下鉄大江戸線, Toei Chikatetsu Oedo-sen) is a subway line in Tokyo, Japan, operated by the Tokyo Metropolitan Bureau of Transportation (Toei). It commenced full operations on December 12, 2000; using the Japanese calendar this reads '12/12/12' as the year 2000 equals Heisei 12. The line is completely underground, making it the second-longest railway tunnel in Japan after the Seikan Tunnel.",
        color: "8B008B",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/6/6c/Toei-subway12-600.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/2/23/Toei-Tocho-mae-Station-01.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/1/11/Tochomae_Station_Platform_2018.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/0/00/Toei-subway-E04-Ushigome-yanagicho-station-platform-20190919-112240.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/e/eb/Toei-subway-E18-Tsukijishijo-station-platform-20191201-120943.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/7/77/Toei-subway-E17-Kachidoki-station-platform-2-20190919-155424.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/e/e4/Toei-subway-E17-Kachidoki-station-entrance-A3b-20190919-160209.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/5/5b/Toei-subway-E27-Shinjuku-station-sign-20191201-133658.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/5/57/Linemap_of_Tokyo_Metropolitan_Government_Bureau_of_Transportation_Oedo_Line.PNG",
            "https://2.bp.blogspot.com/-Dfj2tLXZwS8/WmCX2u72OMI/AAAAAAAAFMU/t66Dr1vY1vMqUDFQS2zjrQO26ufCjfJQQCLcBGAs/s1600/%25E9%2583%25BD%25E5%2596%25B6%25E5%25A4%25A7%25E6%25B1%259F%25E6%2588%25B8%25E7%25B7%259A.png"
        ],
        operator: 4,
        open: 2000,
        speed: 70,
        track: 1435,
        length: 40.7
    },
}

const operators = {
    1: {
        name: "JR East",
        japaneseName: "山手線東日本旅客鉄道株式会社",
        logo: "./imgs/JR-East-logo.svg",
        description: "JR East is a Japanese train company that operates trains in the Kanto, Koshinetsu and Tohoku regions. It also operates all of the Shinkansen services north of Tokyo (Except for Hokkaido).",
        open: 1987
    },
    2: {
        name: "Tokyo Metro",
        japaneseName: "東京メトロ",
        logo: "./imgs/Tokyo-Metro-logo.svg",
        description: "The Tokyo Metro (東京メトロ, Tokyo Metoro) is a major rapid transit system in Tokyo, Japan, operated by the Tokyo Metro Co. While it is not the only rapid transit system operating in Tokyo, it has the higher ridership among the two subway operators: in 2014, the Tokyo Metro had an average daily ridership of 6.84 million passengers, while the other system, the Toei Subway, had 2.85 million average daily rides.",
        open: 1927
    },
    3: {
        name: "Odakyu Electric Railway",
        japaneseName: "小田急電鉄株式会社",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/ad/OdakyuGroup_logo.svg",
        description: "The Odakyu Electric Railway Company, Ltd. (小田急電鉄株式会社, Odakyū Dentetsu kabushiki gaisha), commonly known as Odakyū, is a major railway company based in Tokyo, Japan, best known for its Romancecar series of limited express trains from Tokyo to Odawara, Enoshima, Tama New Town, and Hakone.",
        open: 1948
    },
    4: {
        name: "Toei Subway",
        japaneseName: "都営地下鉄",
        logo: "https://upload.wikimedia.org/wikipedia/commons/c/cb/PrefSymbol-Tokyo.svg",
        description: "The Toei Subway (都営地下鉄, Toei chikatetsu) is one of 2 subway systems in Tokyo, the other being Tokyo Metro. The Toei Subway lines were originally licensed to the Teito Rapid Transit Authority (the predecessor of Tokyo Metro) but were constructed by the Tokyo Metropolitan Government following transfers of the licenses for each line. The subway has run at a financial loss for most of its history due to high construction expenses, particularly for the Oedo Line. However, it reported its first net profit of ¥3.13bn in FY2006. The Toei Subway is operated by the Tokyo Metropolitan Bureau of Transportation.",
        open: 1948
    }
}

const trains = {
    1: {
        name: "E235 Series",
        description: "The E235 Series is a high-capacity train that operates on the Yamanote Line. The train consists of 11 cars and has a capacity of up to 1628 passengers. Cars no. 7 and 10 are configured with 6 doors on each side for quicker boarding and alighting.",
        built: "2015 - 2019",
        images: [
            "./imgs/e235-1.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Yamanote_Line_E235_Ikebukuro_20150326.JPG/1280px-Yamanote_Line_E235_Ikebukuro_20150326.JPG",
        ],
        line: ["1"],
        cars: 11,
        capacity: 1628,
        operator: 1
    },
    2: {
        name: "E231 Series",
        description: "The E231 Series is a high-capacity train that operates on the Chou-Sobu Line and formerly the Yamanote Line. The train consists of 10 cars (Chuo-Sobu Line) or 11 cars (Yamanote Line). Cars no. 7 and 10 are configured with 6 doors on each side for quicker boarding and alighting. (Only for Yamanote Line)",
        built: "2002 - 2005",
        images: [
            "./imgs/e231-1.jpg",
            "./imgs/e231-2.jpg",
            "./imgs/e231-3.jpg",
            "./imgs/e231-4.jpg",
        ],
        line: ["1", "2", "3", "4"],
        cars: 11,
        capacity: 1628,
        operator: 1
    },
    3: {
        name: "Tokyo Metro 05 series",
        description: "The Tokyo Metro 05 series (東京メトロ05系, Tokyo Metoro 05-kei) is an electric multiple unit (EMU) train type operated on the Tokyo Metro Tozai Line and Tokyo Metro Chiyoda Line Ayase Branch in Japan by the subway operator Tokyo Metro. Some sets have also been shipped to Indonesia, where they operate on the KRL Commuterline system in Jakarta.",
        built: "1988 - 2004",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/b/b4/Tokyo_Metro_05_Series_No.21_Gyotoku_Sta.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/e/e9/Tokyo_Metro_05_series_05-142f_20200623.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/c/c9/05-109F_Jabodetabek_KCJ_05_Series_EMU.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/c/c7/Tokyometro05-inside1.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/8/80/Tokyometro05_-inside12th.jpg",
        ],
        line: ["4", "2", "5"],
        cars: 10,
        capacity: 1628,
        operator: 2
    },
    4: {
        name: "Tokyo Metro 16000 series",
        description: "The Tokyo Metro 16000 series (東京メトロ16000系, Tokyo Metoro 16000-kei) is an electric multiple unit (EMU) train type operated by the Tokyo subway operator Tokyo Metro on the Tokyo Metro Chiyoda Line in Tokyo, Japan, since November 2010.",
        built: "2010 - 2017",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/c/cb/%E6%9D%B1%E4%BA%AC%E3%83%A1%E3%83%88%E3%83%AD16000%E7%B3%BB16021%E7%B7%A8%E6%88%90.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/6/65/Tokyo_Metro_Chiyoda_Line_16000_cab_interior_Ayase_Depot_20101128.JPG",
            "https://upload.wikimedia.org/wikipedia/commons/0/0c/Tokyo_Metro_Chiyoda_Line_16203_interior_Ayase_Depot_20101128.JPG",
            "https://upload.wikimedia.org/wikipedia/commons/7/70/Tokyo_Metro_Chiyoda_Line_16000_TVIS_LCD_display_Ayase_Depot_20101128.JPG",
            "https://upload.wikimedia.org/wikipedia/commons/3/35/TokyoMetro_series16000_houkoumakuLED_at_Abiko_station.jpg",
        ],
        line: ["3", "5"],
        cars: 10,
        capacity: 1628,
        operator: 2
    },
    5: {
        name: "Odakyu 5000 series",
        description: "The Odakyu 5000 series (小田急5000形, Odakyu 5000-gata) is a commuter electric multiple unit (EMU) train type operated by the private railway operator Odakyu Electric Railway in Japan since 26 March 2020.",
        built: "2019 - present",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/4/41/OER-Series5000-5451.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/f/f1/OER-Series5000_Inside.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/7/78/OER-Series5000_Inside_Free-space.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/0/03/OER-Series5000_Inside_LCD.jpg",
        ],
        line: ["6"],
        cars: 10,
        capacity: 1628,
        operator: 3
    },
    6: {
        name: "Odakyu 50000 series",
        description: "The Odakyu 50000 series (小田急50000形, Odakyu 50000-gata) or VSE (Vault Super Express) is an electric multiple unit (EMU) train operated by Odakyu Electric Railway on Romancecar services in Japan. Two 10-car articulated sets were introduced in March 2005, manufactured by Nippon Sharyo.",
        built: "2005 - present",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/e/ec/Odakyu.type50000.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/c/c8/OER_50000_inside_Ladder_2.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/3/39/Observation_Seat_of_Odakyu_RomanceCar_VSE_-Summer-.JPG",
        ],
        line: ["6"],
        cars: 10,
        capacity: 358,
        operator: 3
    },
    7: {
        name: "Toei 10-300 series",
        description: "The Toei 10-300 series (都営10-300形, Toei 10-300-gata) is an electric multiple unit (EMU) train type operated by the Tokyo subway operator Tokyo Metropolitan Bureau of Transportation (Toei) on the Toei Shinjuku Line in Tokyo, Japan, since 2005. The train design is based on the JR train stock E231.",
        built: "2005 - 2010",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/8/8b/Toei_Type10-300.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/a/ad/Toei_10-300_Inside.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/a/a7/Seat_of_Toei_10-490_wheelchair-space.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/d/da/Toei_10-430_Higashi-fuchu.jpg",
        ],
        line: ["7"],
        cars: 10,
        capacity: 1300,
        operator: 4
    },
    8: {
        name: "Toei 5500 series",
        description: "The Toei 5500 series (都営5500形, Toei 5500-gata) is an electric multiple unit (EMU) train type on order by Tokyo Metropolitan Bureau of Transportation (Toei) for use on Toei Asakusa Line services in Japan from June 2018.",
        built: "2017 - 2021",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/d/df/Toei-Type5522-1.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/0/0c/Toei-Type5500_Inside.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/d/d5/Toei5501-3.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/f/f6/Toei_5500_cabin.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/e/e5/Toei_5501_Magome_Depot_20170930.jpg",
        ],
        line: ["8"],
        cars: 10,
        capacity: 1300,
        operator: 4
    },
    9: {
        name: "Toei 12-600 series",
        description: "The Toei 12-600 series is used by Toei Subway to operate the Toei Oedo Line in Tokyo, Japan. It is a new batch of sets derived from the original Toei 12-000 series that started delivering for operation in 2011. The train comes in a 8-car configuration.",
        built: "2011 - present",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/6/6c/Toei-subway12-600.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/e/e5/Toei_12-001.JPG",
            "https://upload.wikimedia.org/wikipedia/commons/5/53/Toei12-000-Inside10.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/6/6a/Toei-subway_12-614_Wheelchair_space_Inside.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/1/1d/12-000_prototype_at_Magome_depot.jpg",
        ],
        line: ["9"],
        cars: 8,
        capacity: 780,
        operator: 4
    },
    10: {
        name: "205 Series",
        description: "he 205 series was designed in 1982 as a cheap-to-produce train that could complement the 201 series sets which were considered to be expensive to produce due to the latter's thyristor chopper-controlled traction systems. The first set entered service on the Yamanote Line on 1985, and has remained a staple of the JR fleet network ever since. It was originally built with resistor-controlled traction systems, as they were cheaper to produce than thyristor chopper-controlled motors or something similar to that, but this was somewhat dated technology due to the advent of the variable frequency drive. It uses a traditional design with an unpainted stainless steel body very much like most trains of the period. Each set has a different color scheme to indicate which area the sets serve.",
        built: "1985 - 1991",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/6/6c/Yamanote_Line_205_series_set_30_Tabata_Station_20030202.JPG",
            "https://upload.wikimedia.org/wikipedia/commons/a/a2/Jr_t204standing.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/8/84/JRE_EC205_inside.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/f/f0/Inside-JNR205-04.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/1/15/JRE_205-KeiyouLine_Commuter_Special_Rapid.jpg",
        ],
        line: ["1", "2"],
        cars: 10,
        capacity: 1628,
        operator: 1
    },
}

const tickets = {
    1: {
        name: "JR Rail Pass",
        description: "The Japan Rail Pass (also commonly called JR Pass) is a very cost effective rail pass for long distance train travel in Japan. The pass can be used only by foreign tourists and offers unlimited rides on JR trains for one, two or three weeks at a cost that residents of Japan can only dream of. It comes in two types: ordinary and green car. The latter is valid on green cars (first class cars) that offer more spacious seats than ordinary cars.",
        valid: [7, 14, 21],
        cost: [29650, 47250, 60450],
        vaildConsecutive: true,
        operators: [1]
    },
    2: {
        name: "JR Green Rail Pass",
        description: "The Japan Rail Pass (also commonly called JR Pass) is a very cost effective rail pass for long distance train travel in Japan. The pass can be used only by foreign tourists and offers unlimited rides on JR trains for one, two or three weeks at a cost that residents of Japan can only dream of. It comes in two types: ordinary and green car. The latter is valid on green cars (first class cars) that offer more spacious seats than ordinary cars.",
        valid: [7, 14, 21],
        cost: [39600, 64120, 83390],
        vaildConsecutive: true,
        operators: [1]
    }
}