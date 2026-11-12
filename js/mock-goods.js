/* 목업 전용 — 고도몰에서는 필요 없는 파일.
   고도몰 상품 진열 위젯은 서버에서 목록 템플릿(goods/list/list_01.html 등)으로 HTML 을 만든다.
   이 파일은 그 결과와 똑같은 마크업을 브라우저에서 만들어, main.js 가 실제 환경과 같은 조건에서 동작하는지 확인하는 용도다.
   상품명(goodsNm)은 운영 이름에서 사양(괄호·대괄호 뒤 CPU·메모리·저장·OS 등)만 뺀 이름이다 (2026-10-27 결정 — 사양은 짧은 설명으로). 필드 이름은 고도몰 템플릿 변수와 같다 (goodsNo, goodsNm, brandNm, goodsModelNo, shortDescription, goodsPrice, goodsPriceString).
   스펙은 상품의 '짧은 설명'(shortDescription)에 "항목: 값 / 항목: 값 / …" 으로 넣는다(카드 사양 최대 4줄).
   상품 158개 = 2026-10-27 운영 사이트(on-core.co.kr) 전체 — 상품명·가격('견적문의' 포함)·목록 사진·상세 설명 이미지는 운영 그대로, 사양 줄은 운영 상품명에서 뽑은 것(운영에 사양 칸이 없음).
   cate = 시안 전용 계열(ws·server·desktop·notebook·storage) — 상세의 분류 링크·관련 상품에 쓴다. 고도몰에서는 상품의 분류로 정해진다. */
(function () {
  'use strict';

  var GOODS = {
    '1000000010': { goodsNm: "Lenovo ThinkSystem SR650 V3", brandNm: "Lenovo", goodsModelNo: "", cate: "server",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%84%9C%EB%B2%84/ThinkSystem-SR650_new.jpg",
      shortDescription: "CPU: Xeon 4514Y / 코어: 16코어 · 2.0GHz / 형태: 2U 랙마운트 / 소켓: 2소켓", goodsPrice: 0, goodsPriceString: "견적문의" },
    '1000000012': { goodsNm: "Lenovo ThinkSystem SR650 V3", brandNm: "Lenovo", goodsModelNo: "", cate: "server",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%84%9C%EB%B2%84/ThinkSystem-SR650_new.jpg",
      shortDescription: "CPU: Xeon 4509Y / 코어: 8코어 · 2.6GHz / 형태: 2U 랙마운트 / 소켓: 2소켓", goodsPrice: 0, goodsPriceString: "견적문의" },
    '1000000013': { goodsNm: "Lenovo ThinkSystem SR630 V3", brandNm: "Lenovo", goodsModelNo: "", cate: "server",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%84%9C%EB%B2%84/ThinkSystem-SR630_new.jpg",
      shortDescription: "CPU: Xeon 4509Y / 코어: 8코어 · 2.6GHz / 형태: 1U 랙마운트 / 소켓: 2소켓", goodsPrice: 0, goodsPriceString: "견적문의" },
    '1000000014': { goodsNm: "Lenovo ThinkSystem SR250 V3", brandNm: "Lenovo", goodsModelNo: "", cate: "server",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%84%9C%EB%B2%84/ThinkSystem-SR250_new.jpg",
      shortDescription: "CPU: Xeon E-2434 / 코어: 4코어 · 3.4GHz / 형태: 1U 랙마운트 / 소켓: 1소켓", goodsPrice: 0, goodsPriceString: "견적문의" },
    '1000000015': { goodsNm: "Lenovo ThinkSystem SR250 V3", brandNm: "Lenovo", goodsModelNo: "", cate: "server",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%84%9C%EB%B2%84/ThinkSystem-SR250_new.jpg",
      shortDescription: "CPU: Xeon E-2434 / 코어: 4코어 · 3.4GHz / 형태: 1U 랙마운트 / 소켓: 1소켓", goodsPrice: 0, goodsPriceString: "견적문의" },
    '1000000049': { goodsNm: "ASUS ExpertCenter SFF D700SF-0052250460", brandNm: "ASUS", goodsModelNo: "D700SF-0052250460", cate: "desktop",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/asus_desktop/ASUS-ExpertCenter-sff-%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 5 225 / 메모리: 32GB(16+16) / 저장: 512GB / OS: FreeDOS", goodsPrice: 1998750, goodsPriceString: "" },
    '1000000054': { goodsNm: "ASUS ExpertCenter SFF D700SF-005225209X", brandNm: "ASUS", goodsModelNo: "D700SF-005225209X", cate: "desktop",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/asus_desktop/ASUS-ExpertCenter-sff-%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 5 225 / 메모리: 32GB(16+16) / 저장: 512GB / OS: Windows 11 Pro", goodsPrice: 2248750, goodsPriceString: "" },
    '1000000055': { goodsNm: "ASUS ExpertCenter D7 D700MF-007265388X", brandNm: "ASUS", goodsModelNo: "D700MF-007265388X", cate: "desktop",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/asus_desktop/ASUS-ExpertCenter-mt-%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 7 265 / 메모리: 32GB(16+16) / 저장: 512GB / OS: Windows 11 Pro", goodsPrice: 2129000, goodsPriceString: "" },
    '1000000056': { goodsNm: "ASUS ExpertCenter D7 D700MF-005225237X", brandNm: "ASUS", goodsModelNo: "D700MF-005225237X", cate: "desktop",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/asus_desktop/ASUS-ExpertCenter-mt-%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 5 225 / 메모리: 32GB(16+16) / 저장: 512GB / OS: Windows 11 Pro", goodsPrice: 1839000, goodsPriceString: "" },
    '1000000057': { goodsNm: "ASUS ExpertCenter D7 D700MF-0052250990", brandNm: "ASUS", goodsModelNo: "D700MF-0052250990", cate: "desktop",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/asus_desktop/ASUS-ExpertCenter-mt-%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 5 225 / 메모리: 32GB(16+16) / 저장: 512GB / OS: FreeDOS", goodsPrice: 1629000, goodsPriceString: "" },
    '1000000059': { goodsNm: "ThinkPad X1 카본 G13 21NSS02S00", brandNm: "Lenovo", goodsModelNo: "21NSS02S00", cate: "notebook",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EB%85%B8%ED%8A%B8%EB%B6%81/X1/%5B%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5DThinkPadX1.jpg",
      shortDescription: "CPU: Core Ultra 7 258V / 메모리: 32GB / 저장: 512GB / OS: Windows 11 Pro", goodsPrice: 3179000, goodsPriceString: "" },
    '1000000060': { goodsNm: "ThinkPad X1 카본 G13 21NSS02Q00", brandNm: "Lenovo", goodsModelNo: "21NSS02Q00", cate: "notebook",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EB%85%B8%ED%8A%B8%EB%B6%81/X1/%5B%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5DThinkPadX1.jpg",
      shortDescription: "CPU: Core Ultra 7 258V / 메모리: 32GB / 저장: 512GB / OS: Windows 11 Pro", goodsPrice: 3029000, goodsPriceString: "" },
    '1000000061': { goodsNm: "ThinkPad L16 Gen1 21L3003WKR", brandNm: "Lenovo", goodsModelNo: "21L3003WKR", cate: "notebook",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EB%85%B8%ED%8A%B8%EB%B6%81/L16%20Gen1/%5B%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5DThinkPad16_Gen1.jpg",
      shortDescription: "CPU: Core Ultra 7 155H / 메모리: 16GB / 저장: 512GB / OS: Windows 11 Home", goodsPrice: 1569000, goodsPriceString: "" },
    '1000000062': { goodsNm: "ThinkPad L16 Gen1 21L3003WKR", brandNm: "Lenovo", goodsModelNo: "21L3003WKR", cate: "notebook",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EB%85%B8%ED%8A%B8%EB%B6%81/L16%20Gen1/%5B%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5DThinkPad16_Gen1.jpg",
      shortDescription: "CPU: Core Ultra 7 155H / 메모리: 16GB / 저장: 512GB / OS: Windows 11 Home", goodsPrice: 1569000, goodsPriceString: "" },
    '1000000063': { goodsNm: "LENOVO P3 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/%5B%EC%98%A8%EC%BD%94%EC%96%B4%5DLenovo_P3%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80.jpg",
      shortDescription: "CPU: Core Ultra 7 265 / 메모리: 64GB / 저장: 512GB / GPU: RTX 4000 Ada", goodsPrice: 6899000, goodsPriceString: "" },
    '1000000064': { goodsNm: "LENOVO P3 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/%5B%EC%98%A8%EC%BD%94%EC%96%B4%5DLenovo_P3%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80.jpg",
      shortDescription: "CPU: Core Ultra 7 265 / 메모리: 64GB / 저장: 512GB / GPU: RTX 2000 Ada", goodsPrice: 5699000, goodsPriceString: "" },
    '1000000065': { goodsNm: "LENOVO P3 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/%5B%EC%98%A8%EC%BD%94%EC%96%B4%5DLenovo_P3%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80.jpg",
      shortDescription: "CPU: Core Ultra 9 285 / 메모리: 64GB / 저장: 512GB / GPU: RTX 5080", goodsPrice: 7899000, goodsPriceString: "" },
    '1000000066': { goodsNm: "LENOVO P3 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/%5B%EC%98%A8%EC%BD%94%EC%96%B4%5DLenovo_P3%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80.jpg",
      shortDescription: "CPU: Core Ultra 7 265 / 메모리: 32GB / 저장: 1TB / OS: Windows 11 Pro", goodsPrice: 4599000, goodsPriceString: "" },
    '1000000068': { goodsNm: "ThinkPad X1 카본 G13 21NSS02M00", brandNm: "Lenovo", goodsModelNo: "21NSS02M00", cate: "notebook",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EB%85%B8%ED%8A%B8%EB%B6%81/X1/%5B%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5DThinkPadX1.jpg",
      shortDescription: "CPU: Core Ultra 5 226V / 메모리: 16GB / 저장: 512GB / OS: FreeDOS", goodsPrice: 2449000, goodsPriceString: "" },
    '1000000069': { goodsNm: "ThinkPad X1 카본 G13 21NSS0L700", brandNm: "Lenovo", goodsModelNo: "21NSS0L700", cate: "notebook",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EB%85%B8%ED%8A%B8%EB%B6%81/X1/%5B%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5DThinkPadX1.jpg",
      shortDescription: "CPU: Core Ultra 5 226V / 메모리: 16GB / 저장: 1TB / OS: Windows 11 Pro", goodsPrice: 3449000, goodsPriceString: "" },
    '1000000070': { goodsNm: "Lenovo ThinkSystem SR250 V3", brandNm: "Lenovo", goodsModelNo: "", cate: "server",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%84%9C%EB%B2%84/ThinkSystem-SR250_new.jpg",
      shortDescription: "CPU: Xeon 6325P / 코어: 4코어 · 3.5GHz / 형태: 1U 랙마운트 / 소켓: 1소켓", goodsPrice: 0, goodsPriceString: "견적문의" },
    '1000000071': { goodsNm: "Lenovo ThinkSystem SR250 V3", brandNm: "Lenovo", goodsModelNo: "", cate: "server",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%84%9C%EB%B2%84/ThinkSystem-SR250_new.jpg",
      shortDescription: "CPU: Xeon 6353P / 코어: 8코어 · 2.7GHz / 형태: 1U 랙마운트 / 소켓: 1소켓", goodsPrice: 0, goodsPriceString: "견적문의" },
    '1000000072': { goodsNm: "Lenovo ThinkSystem SR630 V4", brandNm: "Lenovo", goodsModelNo: "", cate: "server",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%84%9C%EB%B2%84/ThinkSystem-SR630v4.jpg",
      shortDescription: "CPU: Xeon 6507P / 코어: 8코어 · 3.5GHz / 형태: 1U 랙마운트 / 소켓: 2소켓", goodsPrice: 0, goodsPriceString: "견적문의" },
    '1000000073': { goodsNm: "Lenovo ThinkSystem SR650 V4", brandNm: "Lenovo", goodsModelNo: "", cate: "server",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%84%9C%EB%B2%84/ThinkSystem-SR650v4.jpg",
      shortDescription: "CPU: Xeon 6507P / 코어: 8코어 · 3.5GHz / 형태: 2U 랙마운트 / 소켓: 2소켓", goodsPrice: 0, goodsPriceString: "견적문의" },
    '1000000074': { goodsNm: "HCF-A2100 All-Flash 스토리지(NAS)", brandNm: "HC", goodsModelNo: "", cate: "storage",
      image: "https://gdadmin-oncore53.godomall.com/data/img/oncore/Storage/HC/thumb/HCF-A2100-%5Boncore%5D.jpg",
      shortDescription: "방식: NAS / 형태: 2U · 25베이 / 캐시: 총 128GB / SSD: 최대 100개", goodsPrice: 0, goodsPriceString: "견적문의" },
    '1000000075': { goodsNm: "HCF-A2200 All-Flash 스토리지(SAN)", brandNm: "HC", goodsModelNo: "", cate: "storage",
      image: "https://gdadmin-oncore53.godomall.com/data/img/oncore/Storage/HC/thumb/HCF-A2200-%5Boncore%5D.jpg",
      shortDescription: "방식: SAN / 형태: 2U · 25베이 / 캐시: 총 64GB / SSD: 최대 100개", goodsPrice: 0, goodsPriceString: "견적문의" },
    '1000000076': { goodsNm: "HCF-A5300 All-Flash 스토리지(SAN+NAS)", brandNm: "HC", goodsModelNo: "", cate: "storage",
      image: "https://gdadmin-oncore53.godomall.com/data/img/oncore/Storage/HC/thumb/HCF-A5300-%5Boncore%5D.jpg",
      shortDescription: "방식: SAN + NAS / 형태: 2U 랙마운트 / 캐시: 총 64GB·128GB / SSD: 최대 800개", goodsPrice: 0, goodsPriceString: "견적문의" },
    '1000000077': { goodsNm: "HCF-A5500 All-Flash 스토리지(SAN+NAS)", brandNm: "HC", goodsModelNo: "", cate: "storage",
      image: "https://gdadmin-oncore53.godomall.com/data/img/oncore/Storage/HC/thumb/HCF-A5500-%5Boncore%5D.jpg",
      shortDescription: "방식: SAN + NAS / 형태: 2U 랙마운트 / 캐시: 총 384GB·512GB / SSD: 최대 1,000개", goodsPrice: 0, goodsPriceString: "견적문의" },
    '1000000362': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 7 265 / 메모리: 16GB / 저장: 512GB / OS: Windows 11 Pro", goodsPrice: 2278000, goodsPriceString: "" },
    '1000000363': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 7 265 / 메모리: 16GB / 저장: 512GB / GPU: RTX 5060", goodsPrice: 2833000, goodsPriceString: "" },
    '1000000365': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 5 245 / 메모리: 16GB / 저장: 512GB / OS: FreeDOS", goodsPrice: 1780000, goodsPriceString: "" },
    '1000000366': { goodsNm: "LENOVO P3 Tiny Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/ThinkStation_p3_tiny%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 5 225 / 메모리: 8GB / 저장: 512GB / OS: FreeDOS", goodsPrice: 1678000, goodsPriceString: "" },
    '1000000367': { goodsNm: "LENOVO P3 Ultra SFF", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/ThinkStation%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80_sff%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 7 265 / 메모리: 16GB / 저장: 512GB / OS: FreeDOS", goodsPrice: 3077000, goodsPriceString: "" },
    '1000000374': { goodsNm: "LENOVO P5", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EB%8D%B0%EC%8A%A4%ED%81%AC%ED%83%91/P5%20Tower/ThinkStation_p5%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Xeon w3-2425 / 메모리: 16GB / 저장: 512GB / GPU: RTX A400", goodsPrice: 4833000, goodsPriceString: "" },
    '1000000431': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 7 265 / 메모리: 64GB / 저장: 4TB / GPU: RTX 5060", goodsPrice: 4969000, goodsPriceString: "" },
    '1000000578': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 7 265 / 메모리: 64GB / 저장: 2TB + 2TB / GPU: RTX 5060", goodsPrice: 5039000, goodsPriceString: "" },
    '1000000579': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 7 265 / 메모리: 64GB / 저장: 2TB / GPU: RTX 5060", goodsPrice: 4489000, goodsPriceString: "" },
    '1000000580': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 7 265 / 메모리: 32GB / 저장: 1TB + 2TB / GPU: RTX 5060", goodsPrice: 4019000, goodsPriceString: "" },
    '1000000581': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 7 265 / 메모리: 32GB / 저장: 1TB + 1TB / GPU: RTX 5060", goodsPrice: 3819000, goodsPriceString: "" },
    '1000000582': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 7 265 / 메모리: 32GB / 저장: 2TB / GPU: RTX 5060", goodsPrice: 3669000, goodsPriceString: "" },
    '1000000583': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 7 265 / 메모리: 32GB / 저장: 1TB / GPU: RTX 5060", goodsPrice: 3469000, goodsPriceString: "" },
    '1000000584': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 7 265 / 메모리: 32GB / 저장: 512GB + 2TB / GPU: RTX 5060", goodsPrice: 3669000, goodsPriceString: "" },
    '1000000585': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 7 265 / 메모리: 32GB / 저장: 512GB + 1TB / GPU: RTX 5060", goodsPrice: 3499000, goodsPriceString: "" },
    '1000000586': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 7 265 / 메모리: 32GB / 저장: 512GB / GPU: RTX 5060", goodsPrice: 3149000, goodsPriceString: "" },
    '1000000587': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 7 265 / 메모리: 16GB / 저장: 1TB + 1TB / GPU: RTX 5060", goodsPrice: 3409000, goodsPriceString: "" },
    '1000000588': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 7 265 / 메모리: 16GB / 저장: 2TB / GPU: RTX 5060", goodsPrice: 3259000, goodsPriceString: "" },
    '1000000589': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 7 265 / 메모리: 16GB / 저장: 1TB / GPU: RTX 5060", goodsPrice: 3059000, goodsPriceString: "" },
    '1000000590': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 7 265 / 메모리: 16GB / 저장: 512GB + 2TB / GPU: RTX 5060", goodsPrice: 3289000, goodsPriceString: "" },
    '1000000591': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 7 265 / 메모리: 16GB / 저장: 512GB + 1TB / GPU: RTX 5060", goodsPrice: 3089000, goodsPriceString: "" },
    '1000000592': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 7 265 / 메모리: 64GB / 저장: 4TB / OS: Windows 11 Pro", goodsPrice: 4529000, goodsPriceString: "" },
    '1000000593': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 7 265 / 메모리: 64GB / 저장: 2TB + 2TB / OS: Windows 11 Pro", goodsPrice: 4599000, goodsPriceString: "" },
    '1000000594': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 7 265 / 메모리: 64GB / 저장: 2TB / OS: Windows 11 Pro", goodsPrice: 4049000, goodsPriceString: "" },
    '1000000595': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 7 265 / 메모리: 32GB / 저장: 2TB + 2TB / OS: Windows 11 Pro", goodsPrice: 3779000, goodsPriceString: "" },
    '1000000596': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 7 265 / 메모리: 32GB / 저장: 2TB + 1TB / OS: Windows 11 Pro", goodsPrice: 3779000, goodsPriceString: "" },
    '1000000597': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 7 265 / 메모리: 32GB / 저장: 1TB + 1TB / OS: Windows 11 Pro", goodsPrice: 3379000, goodsPriceString: "" },
    '1000000598': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 7 265 / 메모리: 32GB / 저장: 2TB / OS: Windows 11 Pro", goodsPrice: 3229000, goodsPriceString: "" },
    '1000000599': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 7 265 / 메모리: 32GB / 저장: 1TB / OS: Windows 11 Pro", goodsPrice: 3029000, goodsPriceString: "" },
    '1000000600': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 7 265 / 메모리: 32GB / 저장: 512GB + 2TB / OS: Windows 11 Pro", goodsPrice: 3259000, goodsPriceString: "" },
    '1000000601': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 7 265 / 메모리: 32GB / 저장: 512GB + 1TB / OS: Windows 11 Pro", goodsPrice: 3059000, goodsPriceString: "" },
    '1000000602': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 7 265 / 메모리: 32GB / 저장: 512GB / OS: Windows 11 Pro", goodsPrice: 2709000, goodsPriceString: "" },
    '1000000603': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 7 265 / 메모리: 16GB / 저장: 1TB + 1TB / OS: Windows 11 Pro", goodsPrice: 2969000, goodsPriceString: "" },
    '1000000604': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 7 265 / 메모리: 16GB / 저장: 2TB / OS: Windows 11 Pro", goodsPrice: 2819000, goodsPriceString: "" },
    '1000000605': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 7 265 / 메모리: 16GB / 저장: 1TB / OS: Windows 11 Pro", goodsPrice: 2649000, goodsPriceString: "" },
    '1000000606': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 7 265 / 메모리: 16GB / 저장: 512GB + 2TB / OS: Windows 11 Pro", goodsPrice: 2849000, goodsPriceString: "" },
    '1000000607': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 7 265 / 메모리: 16GB / 저장: 512GB + 1TB / OS: Windows 11 Pro", goodsPrice: 2649000, goodsPriceString: "" },
    '1000000608': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 7 265 / 메모리: 64GB / 저장: 2TB + 2TB / OS: Windows 11 Pro", goodsPrice: 4599000, goodsPriceString: "" },
    '1000000609': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 7 265 / 메모리: 64GB / 저장: 4TB / OS: Windows 11 Pro", goodsPrice: 4529000, goodsPriceString: "" },
    '1000000610': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 7 265 / 메모리: 64GB / 저장: 2TB / OS: Windows 11 Pro", goodsPrice: 4049000, goodsPriceString: "" },
    '1000000611': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 7 265 / 메모리: 32GB / 저장: 2TB + 1TB / OS: Windows 11 Pro", goodsPrice: 3579000, goodsPriceString: "" },
    '1000000612': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 7 265 / 메모리: 32GB / 저장: 1TB + 1TB / OS: Windows 11 Pro", goodsPrice: 3379000, goodsPriceString: "" },
    '1000000613': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 7 265 / 메모리: 32GB / 저장: 2TB / OS: Windows 11 Pro", goodsPrice: 3229000, goodsPriceString: "" },
    '1000000614': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 7 265 / 메모리: 32GB / 저장: 1TB / OS: Windows 11 Pro", goodsPrice: 3029000, goodsPriceString: "" },
    '1000000615': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 7 265 / 메모리: 32GB / 저장: 512GB + 2TB / OS: Windows 11 Pro", goodsPrice: 3259000, goodsPriceString: "" },
    '1000000616': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 7 265 / 메모리: 32GB / 저장: 512GB + 1TB / OS: Windows 11 Pro", goodsPrice: 3059000, goodsPriceString: "" },
    '1000000617': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 7 265 / 메모리: 32GB / 저장: 512GB / OS: Windows 11 Pro", goodsPrice: 2709000, goodsPriceString: "" },
    '1000000618': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 7 265 / 메모리: 16GB / 저장: 1TB + 1TB / OS: Windows 11 Pro", goodsPrice: 2969000, goodsPriceString: "" },
    '1000000619': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 7 265 / 메모리: 16GB / 저장: 2TB / OS: Windows 11 Pro", goodsPrice: 2819000, goodsPriceString: "" },
    '1000000620': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 7 265 / 메모리: 16GB / 저장: 1TB / OS: Windows 11 Pro", goodsPrice: 2619000, goodsPriceString: "" },
    '1000000621': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 7 265 / 메모리: 16GB / 저장: 512GB + 2TB / OS: Windows 11 Pro", goodsPrice: 2849000, goodsPriceString: "" },
    '1000000622': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 7 265 / 메모리: 16GB / 저장: 512GB + 1TB / OS: Windows 11 Pro", goodsPrice: 2649000, goodsPriceString: "" },
    '1000000623': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 5 245 / 메모리: 64GB / 저장: 4TB / OS: FreeDOS", goodsPrice: 4010000, goodsPriceString: "" },
    '1000000624': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 5 245 / 메모리: 64GB / 저장: 2TB + 2TB / OS: FreeDOS", goodsPrice: 4080000, goodsPriceString: "" },
    '1000000625': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 5 245 / 메모리: 64GB / 저장: 2TB / OS: FreeDOS", goodsPrice: 3530000, goodsPriceString: "" },
    '1000000626': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 5 245 / 메모리: 32GB / 저장: 1TB + 1TB / OS: FreeDOS", goodsPrice: 2860000, goodsPriceString: "" },
    '1000000627': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 5 245 / 메모리: 32GB / 저장: 2TB / OS: FreeDOS", goodsPrice: 2710000, goodsPriceString: "" },
    '1000000628': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 5 245 / 메모리: 32GB / 저장: 1TB / OS: FreeDOS", goodsPrice: 2510000, goodsPriceString: "" },
    '1000000629': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 5 245 / 메모리: 32GB / 저장: 512GB + 2TB / OS: FreeDOS", goodsPrice: 2740000, goodsPriceString: "" },
    '1000000630': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 5 245 / 메모리: 32GB / 저장: 512GB + 1TB / OS: FreeDOS", goodsPrice: 2540000, goodsPriceString: "" },
    '1000000631': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 5 245 / 메모리: 32GB / 저장: 512GB / OS: FreeDOS", goodsPrice: 2190000, goodsPriceString: "" },
    '1000000632': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 5 245 / 메모리: 16GB / 저장: 1TB + 1TB / OS: FreeDOS", goodsPrice: 2450000, goodsPriceString: "" },
    '1000000633': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 5 245 / 메모리: 16GB / 저장: 2TB / OS: FreeDOS", goodsPrice: 2300000, goodsPriceString: "" },
    '1000000634': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 5 245 / 메모리: 16GB / 저장: 1TB / OS: FreeDOS", goodsPrice: 2100000, goodsPriceString: "" },
    '1000000635': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 5 245 / 메모리: 16GB / 저장: 512GB + 2TB / OS: FreeDOS", goodsPrice: 2330000, goodsPriceString: "" },
    '1000000636': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 5 245 / 메모리: 16GB / 저장: 512GB + 1TB / OS: FreeDOS", goodsPrice: 2130000, goodsPriceString: "" },
    '1000000637': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 5 245 / 메모리: 64GB / 저장: 4TB / OS: FreeDOS", goodsPrice: 4010000, goodsPriceString: "" },
    '1000000638': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 5 245 / 메모리: 64GB / 저장: 2TB / OS: FreeDOS", goodsPrice: 3530000, goodsPriceString: "" },
    '1000000639': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 5 245 / 메모리: 32GB / 저장: 1TB + 1TB / OS: FreeDOS", goodsPrice: 2860000, goodsPriceString: "" },
    '1000000640': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 5 245 / 메모리: 32GB / 저장: 2TB / OS: FreeDOS", goodsPrice: 2710000, goodsPriceString: "" },
    '1000000641': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 5 245 / 메모리: 32GB / 저장: 1TB / OS: FreeDOS", goodsPrice: 2510000, goodsPriceString: "" },
    '1000000642': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 5 245 / 메모리: 32GB / 저장: 512GB + 2TB / OS: FreeDOS", goodsPrice: 2740000, goodsPriceString: "" },
    '1000000643': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 5 245 / 메모리: 32GB / 저장: 512GB + 1TB / OS: FreeDOS", goodsPrice: 2540000, goodsPriceString: "" },
    '1000000644': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 5 245 / 메모리: 32GB / 저장: 512GB / OS: FreeDOS", goodsPrice: 2190000, goodsPriceString: "" },
    '1000000645': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 5 245 / 메모리: 16GB / 저장: 1TB + 1TB / OS: FreeDOS", goodsPrice: 2450000, goodsPriceString: "" },
    '1000000646': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 5 245 / 메모리: 16GB / 저장: 2TB / OS: FreeDOS", goodsPrice: 2300000, goodsPriceString: "" },
    '1000000647': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 5 245 / 메모리: 16GB / 저장: 1TB / OS: FreeDOS", goodsPrice: 2100000, goodsPriceString: "" },
    '1000000648': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 5 245 / 메모리: 16GB / 저장: 512GB + 2TB / OS: FreeDOS", goodsPrice: 2330000, goodsPriceString: "" },
    '1000000649': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 5 245 / 메모리: 16GB / 저장: 512GB + 1TB / OS: FreeDOS", goodsPrice: 2100000, goodsPriceString: "" },
    '1000000668': { goodsNm: "LENOVO P3 Ultra SFF G2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/ThinkStation%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80_sff%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 7 265 / 메모리: 64GB / 저장: 4TB / GPU: RTX A400", goodsPrice: 5309000, goodsPriceString: "" },
    '1000000669': { goodsNm: "LENOVO P3 Ultra SFF G2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/ThinkStation%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80_sff%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 7 265 / 메모리: 64GB / 저장: 2TB + 2TB / GPU: RTX A400", goodsPrice: 5379000, goodsPriceString: "" },
    '1000000670': { goodsNm: "LENOVO P3 Ultra SFF G2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/ThinkStation%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80_sff%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 7 265 / 메모리: 64GB / 저장: 2TB / GPU: RTX A400", goodsPrice: 4829000, goodsPriceString: "" },
    '1000000671': { goodsNm: "LENOVO P3 Ultra SFF G2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/ThinkStation%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80_sff%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 7 265 / 메모리: 32GB / 저장: 1TB + 2TB / GPU: RTX A400", goodsPrice: 4359000, goodsPriceString: "" },
    '1000000672': { goodsNm: "LENOVO P3 Ultra SFF G2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/ThinkStation%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80_sff%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 7 265 / 메모리: 32GB / 저장: 1TB + 1TB / GPU: RTX A400", goodsPrice: 4159000, goodsPriceString: "" },
    '1000000673': { goodsNm: "LENOVO P3 Ultra SFF G2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/ThinkStation%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80_sff%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 7 265 / 메모리: 32GB / 저장: 2TB / GPU: RTX A400", goodsPrice: 4009000, goodsPriceString: "" },
    '1000000674': { goodsNm: "LENOVO P3 Ultra SFF G2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/ThinkStation%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80_sff%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 7 265 / 메모리: 32GB / 저장: 1TB / GPU: RTX A400", goodsPrice: 3809000, goodsPriceString: "" },
    '1000000675': { goodsNm: "LENOVO P3 Ultra SFF G2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/ThinkStation%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80_sff%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 7 265 / 메모리: 32GB / 저장: 512GB + 2TB / GPU: RTX A400", goodsPrice: 4039000, goodsPriceString: "" },
    '1000000676': { goodsNm: "LENOVO P3 Ultra SFF G2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/ThinkStation%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80_sff%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 7 265 / 메모리: 32GB / 저장: 512GB + 1TB / GPU: RTX A400", goodsPrice: 3839000, goodsPriceString: "" },
    '1000000677': { goodsNm: "LENOVO P3 Ultra SFF G2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/ThinkStation%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80_sff%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 7 265 / 메모리: 32GB / 저장: 512GB / GPU: RTX A400", goodsPrice: 3759000, goodsPriceString: "" },
    '1000000678': { goodsNm: "LENOVO P3 Ultra SFF G2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/ThinkStation%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80_sff%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 7 265 / 메모리: 32GB / 저장: 512GB / GPU: RTX A400", goodsPrice: 3489000, goodsPriceString: "" },
    '1000000679': { goodsNm: "LENOVO P3 Ultra SFF G2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/ThinkStation%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80_sff%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 7 265 / 메모리: 16GB / 저장: 1TB + 1TB / GPU: RTX A400", goodsPrice: 3749000, goodsPriceString: "" },
    '1000000680': { goodsNm: "LENOVO P3 Ultra SFF G2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/ThinkStation%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80_sff%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 7 265 / 메모리: 16GB / 저장: 2TB / GPU: RTX A400", goodsPrice: 3599000, goodsPriceString: "" },
    '1000000681': { goodsNm: "LENOVO P3 Ultra SFF G2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/ThinkStation%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80_sff%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 7 265 / 메모리: 16GB / 저장: 1TB / GPU: RTX A400", goodsPrice: 3390000, goodsPriceString: "" },
    '1000000682': { goodsNm: "LENOVO P3 Ultra SFF G2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/ThinkStation%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80_sff%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 7 265 / 메모리: 16GB / 저장: 512GB + 2TB / GPU: RTX A400", goodsPrice: 3629000, goodsPriceString: "" },
    '1000000683': { goodsNm: "LENOVO P3 Ultra SFF G2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/ThinkStation%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80_sff%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 7 265 / 메모리: 16GB / 저장: 512GB + 1TB / GPU: RTX A400", goodsPrice: 3429000, goodsPriceString: "" },
    '1000000684': { goodsNm: "LENOVO P3 Ultra SFF G2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/ThinkStation%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80_sff%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 7 265 / 메모리: 16GB / 저장: 512GB / GPU: RTX A400", goodsPrice: 3349000, goodsPriceString: "" },
    '1000000685': { goodsNm: "LENOVO P3 Ultra SFF G2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/ThinkStation%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80_sff%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 7 265 / 메모리: 16GB / 저장: 512GB / GPU: RTX A400", goodsPrice: 3079000, goodsPriceString: "" },
    '1000000686': { goodsNm: "LENOVO P3 Tiny G2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/ThinkStation_p3_tiny%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 5 225 / 메모리: 32GB / 저장: 2TB + 2TB / OS: Windows 11 Pro", goodsPrice: 3539000, goodsPriceString: "" },
    '1000000687': { goodsNm: "LENOVO P3 Tiny G2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/ThinkStation_p3_tiny%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 5 225 / 메모리: 32GB / 저장: 1TB + 2TB / OS: Windows 11 Pro", goodsPrice: 3339000, goodsPriceString: "" },
    '1000000688': { goodsNm: "LENOVO P3 Tiny G2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/ThinkStation_p3_tiny%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 5 225 / 메모리: 32GB / 저장: 1TB + 1TB / OS: Windows 11 Pro", goodsPrice: 3130000, goodsPriceString: "" },
    '1000000689': { goodsNm: "LENOVO P3 Tiny G2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/ThinkStation_p3_tiny%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 5 225 / 메모리: 32GB / 저장: 2TB / OS: Windows 11 Pro", goodsPrice: 2989000, goodsPriceString: "" },
    '1000000690': { goodsNm: "LENOVO P3 Tiny G2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/ThinkStation_p3_tiny%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 5 225 / 메모리: 32GB / 저장: 1TB / OS: Windows 11 Pro", goodsPrice: 2789000, goodsPriceString: "" },
    '1000000691': { goodsNm: "LENOVO P3 Tiny G2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/ThinkStation_p3_tiny%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 5 225 / 메모리: 32GB / 저장: 512GB + 2TB / OS: Windows 11 Pro", goodsPrice: 3019000, goodsPriceString: "" },
    '1000000692': { goodsNm: "LENOVO P3 Tiny G2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/ThinkStation_p3_tiny%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 5 225 / 메모리: 32GB / 저장: 512GB + 1TB / OS: Windows 11 Pro", goodsPrice: 2819000, goodsPriceString: "" },
    '1000000693': { goodsNm: "LENOVO P3 Tiny G2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/ThinkStation_p3_tiny%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 5 225 / 메모리: 32GB / 저장: 512GB / OS: Windows 11 Pro", goodsPrice: 2739000, goodsPriceString: "" },
    '1000000694': { goodsNm: "LENOVO P3 Tiny G2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/ThinkStation_p3_tiny%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 5 225 / 메모리: 32GB / 저장: 512GB / OS: FreeDOS", goodsPrice: 2469000, goodsPriceString: "" },
    '1000000695': { goodsNm: "LENOVO P3 Tiny G2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/ThinkStation_p3_tiny%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 5 225 / 메모리: 16GB / 저장: 1TB + 1TB / OS: FreeDOS", goodsPrice: 2729000, goodsPriceString: "" },
    '1000000696': { goodsNm: "LENOVO P3 Tiny G2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/ThinkStation_p3_tiny%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 5 225 / 메모리: 16GB / 저장: 1TB / OS: FreeDOS", goodsPrice: 2379000, goodsPriceString: "" },
    '1000000697': { goodsNm: "LENOVO P3 Tiny G2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/ThinkStation_p3_tiny%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 5 225 / 메모리: 16GB / 저장: 512GB + 2TB / OS: FreeDOS", goodsPrice: 2609000, goodsPriceString: "" },
    '1000000698': { goodsNm: "LENOVO P3 Tiny G2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/ThinkStation_p3_tiny%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 5 225 / 메모리: 16GB / 저장: 512GB + 1TB / OS: FreeDOS", goodsPrice: 2409000, goodsPriceString: "" },
    '1000000699': { goodsNm: "LENOVO P3 Tiny G2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/ThinkStation_p3_tiny%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 5 225 / 메모리: 16GB / 저장: 512GB / OS: FreeDOS", goodsPrice: 2059000, goodsPriceString: "" },
    '1000000700': { goodsNm: "LENOVO P3 Tiny G2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/ThinkStation_p3_tiny%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 5 225 / 메모리: 8GB / 저장: 512GB / OS: Windows 11 Pro", goodsPrice: 1969000, goodsPriceString: "" },
    '1000000701': { goodsNm: "LENOVO P3 Tiny G2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/ThinkStation_p3_tiny%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 5 225 / 메모리: 8GB / 저장: 512GB / OS: FreeDOS", goodsPrice: 1699000, goodsPriceString: "" },
    '1000000702': { goodsNm: "LENOVO P5 TWR", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/p5_main.jpg",
      shortDescription: "CPU: Xeon w3-2425 / 메모리: 64GB / 저장: 512GB + 2TB / GPU: RTX 2000 Ada", goodsPrice: 9284000, goodsPriceString: "" },
    '1000000703': { goodsNm: "LENOVO P5 TWR", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/p5_main.jpg",
      shortDescription: "CPU: Xeon w3-2425 / 메모리: 64GB / 저장: 512GB + 2TB / GPU: RTX A1000", goodsPrice: 8834000, goodsPriceString: "" },
    '1000000704': { goodsNm: "LENOVO P5 TWR", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/p5_main.jpg",
      shortDescription: "CPU: Xeon w3-2425 / 메모리: 64GB / 저장: 1TB + 2TB / GPU: RTX A400", goodsPrice: 8454000, goodsPriceString: "" },
    '1000000705': { goodsNm: "LENOVO P5 TWR", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/p5_main.jpg",
      shortDescription: "CPU: Xeon w3-2425 / 메모리: 64GB / 저장: 512GB + 2TB / GPU: RTX A400", goodsPrice: 8134000, goodsPriceString: "" },
    '1000000706': { goodsNm: "LENOVO P5 TWR", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/p5_main.jpg",
      shortDescription: "CPU: Xeon w3-2425 / 메모리: 32GB / 저장: 512GB + 2TB / GPU: RTX 2000 Ada", goodsPrice: 7084000, goodsPriceString: "" },
    '1000000707': { goodsNm: "LENOVO P5 TWR", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/p5_main.jpg",
      shortDescription: "CPU: Xeon w3-2425 / 메모리: 32GB / 저장: 512GB + 2TB / GPU: RTX A1000", goodsPrice: 6634000, goodsPriceString: "" },
    '1000000708': { goodsNm: "LENOVO P5 TWR", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/p5_main.jpg",
      shortDescription: "CPU: Xeon w3-2425 / 메모리: 32GB / 저장: 1TB + 2TB / GPU: RTX A400", goodsPrice: 6454000, goodsPriceString: "" },
    '1000000709': { goodsNm: "LENOVO P5 TWR", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/p5_main.jpg",
      shortDescription: "CPU: Xeon w3-2425 / 메모리: 32GB / 저장: 512GB + 2TB / GPU: RTX A400", goodsPrice: 5934000, goodsPriceString: "" },
    '1000000710': { goodsNm: "LENOVO P5 TWR", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/p5_main.jpg",
      shortDescription: "CPU: Xeon w3-2425 / 메모리: 16GB / 저장: 512GB + 2TB / GPU: RTX A400", goodsPrice: 4834000, goodsPriceString: "" },
    '1000000713': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 5 245 / 메모리: 16GB / 저장: 512GB / OS: Windows 11 Pro", goodsPrice: 2767000, goodsPriceString: "" },
    '1000000714': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 7 265 / 메모리: 16GB / 저장: 512GB / OS: Windows 11 Pro", goodsPrice: 3094000, goodsPriceString: "" },
    '1000000715': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 7 265 / 메모리: 16GB / 저장: 512GB / GPU: RTX 5060", goodsPrice: 4149000, goodsPriceString: "" },
    '1000000716': { goodsNm: "LENOVO P2 TWR Gen2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/ThinkStation_p2%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 9 285 / 메모리: 16GB / 저장: 512GB / OS: Windows 11 Pro", goodsPrice: 3542000, goodsPriceString: "" },
    '1000000717': { goodsNm: "LENOVO P3 Ultra SFF G2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/ThinkStation%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80_sff%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 7 265 / 메모리: 16GB / 저장: 512GB / OS: Windows 11 Pro", goodsPrice: 3302000, goodsPriceString: "" },
    '1000000718': { goodsNm: "LENOVO P3 Tiny G2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/ThinkStation_p3_tiny%EB%AA%A9%EB%A1%9D%EC%9D%B4%EB%AF%B8%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      shortDescription: "CPU: Core Ultra 5 225 / 메모리: 8GB / 저장: 512GB / OS: Windows 11 Pro", goodsPrice: 2140000, goodsPriceString: "" },
    '1000000719': { goodsNm: "LENOVO P5 TWR G2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/p5_main.jpg",
      shortDescription: "CPU: Xeon 634 / 메모리: 16GB / 저장: 512GB / GPU: RTX A400", goodsPrice: 6572000, goodsPriceString: "" },
    '1000000720': { goodsNm: "LENOVO P5 TWR G2", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/p5_main.jpg",
      shortDescription: "CPU: Xeon 634 / 메모리: 32GB / 저장: 512GB / GPU: RTX A400", goodsPrice: 8074000, goodsPriceString: "" },
    // 2026-11-12 운영에 새로 등록된 상품(분류 P4 004001004) — 운영 이름 'LENOVO P4 TWR (Ryzen 9 Pro 9965X3D/32GB/1TB/1100W/Win11Pro)', 사양은 이름 괄호에서
    '1000000721': { goodsNm: "LENOVO P4 TWR", brandNm: "Lenovo", goodsModelNo: "", cate: "ws",
      image: "https://godomall-storage.cdn-nhncommerce.com/0873664c217a4be9efdd4b47a75ff1a3/goods/1000000721/image/main/1000000721_main_010.jpg",
      shortDescription: "CPU: Ryzen 9 Pro 9965X3D / 메모리: 32GB / 저장: 1TB / OS: Win11Pro", goodsPrice: 5300000, goodsPriceString: "" }
  };

  // 관리자 '메인 상품 진열'에 등록할 상품 (진열 하나 = 화면의 상품 묶음 하나). 2026-10-27 운영 메인에 진열된 상품을 그 순서대로 옮김 —
  // 운영 메인에 노트북·스토리지 진열이 없어 두 탭은 운영 분류 목록 앞쪽 상품
  var DISPLAYS = {
    all: ['1000000374', '1000000367', '1000000366', '1000000365', '1000000072', '1000000073', '1000000049', '1000000054'],
    ws: ['1000000374', '1000000367', '1000000366', '1000000365'],
    server: ['1000000072', '1000000073'],
    desktop: ['1000000049', '1000000054', '1000000057', '1000000056'],
    notebook: ['1000000069', '1000000068', '1000000060', '1000000059'],
    storage: ['1000000077', '1000000076', '1000000075', '1000000074'],
    hc: ['1000000077', '1000000076', '1000000075', '1000000074'], // 메인 'HC' 탭 (스토리지 > HC 분류)
    // 조달안내 카드 한 줄 (2026-10-28, 탭 없음): 고도몰은 관리자 진열 '조달'. 시안은 서버·워크스테이션 앞쪽 운영 상품을 번갈아
    g2b: ['1000000072', '1000000374', '1000000073', '1000000367']
  };

  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var money = function (n) { return n.toLocaleString('ko-KR'); };
  // 시안 전용: 하위 폴더(pages/)의 페이지는 window.OC_ROOT = '../' 로, 상품 링크는 window.OC_VIEW(상품 상세 시안)로 바꾼다. 고도몰에서는 이 파일이 필요 없다
  var ROOT = window.OC_ROOT || '';
  var url = function (no) { return (window.OC_VIEW || 'pages/goods-view.html') + '?no=' + no; };

  /* 아래 문자열은 기획안 '10 고도몰 구현 검토'에 적은 목록 템플릿과 한 줄씩 대응한다.
     {..goodsImage} 는 고도몰이 <img> 태그 전체를 출력한다. 관리자 상품 아이콘({..goodsIcon})은 출력하지 않는다 — 운영 사이트에서 쓰지 않고, 스킨이 모양을 정할 수 없는 이미지라서 */
  function li(no) {
    var g = GOODS[no];
    var quoteOnly = g.goodsPriceString !== '';
    return '<li class="oc-card" data-goodsno="' + no + '" data-brand="' + esc(g.brandNm) + '">' +
      '<a class="oc-card-img" href="' + url(no) + '">' +
        '<img src="' + g.image + '" width="347" alt="' + esc(g.goodsNm) + '" title="' + esc(g.goodsNm) + '" class="middle" loading="lazy">' +
      '</a>' +
      '<div class="oc-card-body">' +
        // 브랜드 줄: 브랜드 + '견적 전용'(가격 대체 문구가 있는 상품). 고도몰: <div class="oc-card-meta"><em class="oc-brand">{..brandNm}</em>{? ..goodsPriceString}<span class="oc-badge oc-q">견적 전용</span>{/}</div>
        '<div class="oc-card-meta"><em class="oc-brand">' + esc(g.brandNm) + '</em>' + (quoteOnly ? '<span class="oc-badge oc-q">견적 전용</span>' : '') + '</div>' +
        '<h3 class="oc-card-name"><a class="oc-card-link" href="' + url(no) + '">' + esc(g.goodsNm) + '</a></h3>' +
        // 품번 줄은 항상 출력한다 (카드마다 줄 수가 달라지지 않게). 고도몰 템플릿: 품번이 없을 때 { ? .goodsModelNo } 의 else 쪽에 '—' 출력
        '<p class="oc-card-mfg">제조사 품번 ' + (g.goodsModelNo ? esc(g.goodsModelNo) : '—') + '</p>' + // 늘 출력(줄 높이를 맞춘다). 고도몰: {? ..goodsModelNo}{..goodsModelNo}{:}—{/}
        '<ul class="oc-card-spec" data-spec="' + esc(g.shortDescription) + '"></ul>' +
        '<div class="oc-card-price">' + (quoteOnly
          ? '<b class="oc-q oc-card-amt">' + esc(g.goodsPriceString) + '</b><small class="oc-card-note">구성·수량에 따라 견적</small>' // 모든 분류에 맞는 공통 문구 — 상품마다 입력하지 않는다(2026-10-27)
          : '<b class="oc-card-amt">' + money(g.goodsPrice) + '원</b><small class="oc-card-note">부가세 포함<span class="oc-more-note"> · 수량 구매 시 별도 견적</span></small>') +
        '</div>' +
        '<div class="oc-card-act"><button type="button" class="oc-btn oc-btn-d" data-quote>견적 요청</button><button type="button" class="oc-btn oc-btn-o oc-add" data-add>견적 담기</button></div>' +
        '<label class="oc-chk"><input type="checkbox" data-cmp> 비교</label>' +
      '</div>' +
    '</li>';
  }

  // 상세 설명(goodsDescription) 이미지 — 운영 사이트 같은 상품의 상세 이미지 주소(2026-10-27 옮김). 고도몰은 관리자 상품 등록의 '상세 설명'을 그대로 출력하므로 필요 없다
  // 158개 전체. 운영에서도 404 인 P3-Tiny-G2_spec_30K5S0BW00.jpg 는 뺐다
  var DESC = {
    '1000000010': [
      "https://itketweb.hgodo.com/data/img/%EC%95%84%EC%9D%B4%ED%8B%B0%EC%BC%93/%EC%84%9C%EB%B2%84/Lenovo/Lenovo-ThinkSystem-SR650-V3(4514Y).jpg"
    ],
    '1000000012': [
      "https://itketweb.hgodo.com/data/img/%EC%95%84%EC%9D%B4%ED%8B%B0%EC%BC%93/%EC%84%9C%EB%B2%84/Lenovo/Lenovo-ThinkSystem-SR650-V3(4509Y).jpg"
    ],
    '1000000013': [
      "https://itketweb.hgodo.com/data/img/%EC%95%84%EC%9D%B4%ED%8B%B0%EC%BC%93/%EC%84%9C%EB%B2%84/Lenovo/Lenovo-ThinkSystem-SR630-V3(4509Y).jpg"
    ],
    '1000000014': [
      "https://itketweb.hgodo.com/data/img/%EC%95%84%EC%9D%B4%ED%8B%B0%EC%BC%93/%EC%84%9C%EB%B2%84/Lenovo/Lenovo-ThinkSystem-SR250-V3(E-2434,3.5).jpg"
    ],
    '1000000015': [
      "https://itketweb.hgodo.com/data/img/%EC%95%84%EC%9D%B4%ED%8B%B0%EC%BC%93/%EC%84%9C%EB%B2%84/Lenovo/Lenovo-ThinkSystem-SR250-V3(E-2434,2.5).jpg"
    ],
    '1000000049': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/asus_desktop/ExpertCenter%20D7%20SFF/D700SF-0052250460/D700SF-0052250460.jpg"
    ],
    '1000000054': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/asus_desktop/ExpertCenter%20D7%20SFF/D700SF-005225209X/D700SF-005225209X.jpg"
    ],
    '1000000055': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/asus_desktop/ExpertCenter%20D7%20MT/D700MF-007265388X/D700MF-007265388X_01.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/asus_desktop/ExpertCenter%20D7%20MT/D700MF-007265388X/D700MF-007265388X_02.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/asus_desktop/ExpertCenter%20D7%20MT/D700MF-007265388X/D700MF-007265388X_03.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/asus_desktop/ExpertCenter%20D7%20MT/D700MF-007265388X/D700MF-007265388X_04.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/asus_desktop/ExpertCenter%20D7%20MT/D700MF-007265388X/D700MF-007265388X_05.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/asus_desktop/ExpertCenter%20D7%20MT/D700MF-007265388X/D700MF-007265388X_06.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/asus_desktop/ExpertCenter%20D7%20MT/D700MF-007265388X/D700MF-007265388X_07.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/asus_desktop/ExpertCenter%20D7%20MT/D700MF-007265388X/D700MF-007265388X_08.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/asus_desktop/ExpertCenter%20D7%20MT/D700MF-007265388X/D700MF-007265388X_09.jpg"
    ],
    '1000000056': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/asus_desktop/ExpertCenter%20D7%20MT/D700MF-005225237X/D700MF-005225237X_01.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/asus_desktop/ExpertCenter%20D7%20MT/D700MF-005225237X/D700MF-005225237X_02.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/asus_desktop/ExpertCenter%20D7%20MT/D700MF-005225237X/D700MF-005225237X_03.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/asus_desktop/ExpertCenter%20D7%20MT/D700MF-005225237X/D700MF-005225237X_04.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/asus_desktop/ExpertCenter%20D7%20MT/D700MF-005225237X/D700MF-005225237X_05.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/asus_desktop/ExpertCenter%20D7%20MT/D700MF-005225237X/D700MF-005225237X_06.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/asus_desktop/ExpertCenter%20D7%20MT/D700MF-005225237X/D700MF-005225237X_07.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/asus_desktop/ExpertCenter%20D7%20MT/D700MF-005225237X/D700MF-005225237X_08.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/asus_desktop/ExpertCenter%20D7%20MT/D700MF-005225237X/D700MF-005225237X_09.jpg"
    ],
    '1000000057': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/asus_desktop/ExpertCenter%20D7%20MT/D700MF-005225237X/D700MF-005225237X_01.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/asus_desktop/ExpertCenter%20D7%20MT/D700MF-005225237X/D700MF-005225237X_02.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/asus_desktop/ExpertCenter%20D7%20MT/D700MF-005225237X/D700MF-005225237X_03.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/asus_desktop/ExpertCenter%20D7%20MT/D700MF-005225237X/D700MF-005225237X_04.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/asus_desktop/ExpertCenter%20D7%20MT/D700MF-005225237X/D700MF-005225237X_05.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/asus_desktop/ExpertCenter%20D7%20MT/D700MF-005225237X/D700MF-005225237X_06.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/asus_desktop/ExpertCenter%20D7%20MT/D700MF-005225237X/D700MF-005225237X_07.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/asus_desktop/ExpertCenter%20D7%20MT/D700MF-005225237X/D700MF-005225237X_08.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/asus_desktop/ExpertCenter%20D7%20MT/D700MF-005225237X/D700MF-005225237X_09.jpg"
    ],
    '1000000059': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EB%85%B8%ED%8A%B8%EB%B6%81/X1%20%EC%B9%B4%EB%B3%B8%20G13%2021NSS02S00.jpg"
    ],
    '1000000060': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EB%85%B8%ED%8A%B8%EB%B6%81/X1%20%EC%B9%B4%EB%B3%B8%20G13%2021NSS02Q00.jpg"
    ],
    '1000000061': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EB%85%B8%ED%8A%B8%EB%B6%81/L16%20Gen1/ThinkPad%20L16%20Gen1%2021L3003WKR%2001.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EB%85%B8%ED%8A%B8%EB%B6%81/L16%20Gen1/ThinkPad%20L16%20Gen1%2021L3003WKR%2002.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EB%85%B8%ED%8A%B8%EB%B6%81/L16%20Gen1/ThinkPad%20L16%20Gen1%2021L3003WKR%2003.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EB%85%B8%ED%8A%B8%EB%B6%81/L16%20Gen1/ThinkPad%20L16%20Gen1%2021L3003WKR%2004.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EB%85%B8%ED%8A%B8%EB%B6%81/L16%20Gen1/ThinkPad%20L16%20Gen1%2021L3003WKR%2005.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EB%85%B8%ED%8A%B8%EB%B6%81/L16%20Gen1/ThinkPad%20L16%20Gen1%2021L3003WKR%2006.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EB%85%B8%ED%8A%B8%EB%B6%81/L16%20Gen1/ThinkPad%20L16%20Gen1%2021L3003WKR%2007.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EB%85%B8%ED%8A%B8%EB%B6%81/L16%20Gen1/ThinkPad%20L16%20Gen1%2021L3003WKR%2008.jpg"
    ],
    '1000000062': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EB%85%B8%ED%8A%B8%EB%B6%81/L16%20Gen1/ThinkPad%20L16%20Gen1%2021L3003WKR%2001.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EB%85%B8%ED%8A%B8%EB%B6%81/L16%20Gen1/ThinkPad%20L16%20Gen1%2021L3003WKR%2002.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EB%85%B8%ED%8A%B8%EB%B6%81/L16%20Gen1/ThinkPad%20L16%20Gen1%2021L3003WKR%2003.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EB%85%B8%ED%8A%B8%EB%B6%81/L16%20Gen1/ThinkPad%20L16%20Gen1%2021L3003WKR%2004.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EB%85%B8%ED%8A%B8%EB%B6%81/L16%20Gen1/ThinkPad%20L16%20Gen1%2021L3003WKR%2005.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EB%85%B8%ED%8A%B8%EB%B6%81/L16%20Gen1/ThinkPad%20L16%20Gen1%2021L3003WKR%2006.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EB%85%B8%ED%8A%B8%EB%B6%81/L16%20Gen1/ThinkPad%20L16%20Gen1%2021L3003WKR%2007.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EB%85%B8%ED%8A%B8%EB%B6%81/L16%20Gen1/ThinkPad%20L16%20Gen1%2021L3003WKR%2008.jpg"
    ],
    '1000000063': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/ThinkStation-P3-TWR-Gen2-30HTS0P500.jpg"
    ],
    '1000000064': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/ThinkStation-P3-TWR-Gen2-30HTS0P700.jpg"
    ],
    '1000000065': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/ThinkStation-P3-TWR-Gen2-30HTS0P800.jpg"
    ],
    '1000000066': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/ThinkStation-P3-TWR-Gen2-30HTS0P900.jpg"
    ],
    '1000000068': [
      "https://itketweb.hgodo.com/data/img/%EC%95%84%EC%9D%B4%ED%8B%B0%EC%BC%93/LENOVO/ThinkPad%20X1%20%EC%B9%B4%EB%B3%B8%20Gen%2013/21NSS02M00.jpg"
    ],
    '1000000069': [
      "https://itketweb.hgodo.com/data/img/%EC%95%84%EC%9D%B4%ED%8B%B0%EC%BC%93/LENOVO/ThinkPad%20X1%20%EC%B9%B4%EB%B3%B8%20Gen%2013/21NSS02M00.jpg"
    ],
    '1000000070': [
      "https://itketweb.hgodo.com/data/img/%EC%95%84%EC%9D%B4%ED%8B%B0%EC%BC%93/%EC%84%9C%EB%B2%84/Lenovo/Lenovo-ThinkSystem-SR250-V3_6325P.jpg"
    ],
    '1000000071': [
      "https://itketweb.hgodo.com/data/img/%EC%95%84%EC%9D%B4%ED%8B%B0%EC%BC%93/%EC%84%9C%EB%B2%84/Lenovo/Lenovo-ThinkSystem-SR250-V3_6353P.jpg"
    ],
    '1000000072': [
      "https://itketweb.hgodo.com/data/img/%EC%95%84%EC%9D%B4%ED%8B%B0%EC%BC%93/%EC%84%9C%EB%B2%84/Lenovo/Lenovo-ThinkSystem-SR630-V4_6507P.jpg"
    ],
    '1000000073': [
      "https://itketweb.hgodo.com/data/img/%EC%95%84%EC%9D%B4%ED%8B%B0%EC%BC%93/%EC%84%9C%EB%B2%84/Lenovo/Lenovo-ThinkSystem-SR650-V4_6507P.jpg"
    ],
    '1000000074': [
      "https://gdadmin-oncore53.godomall.com/data/img/oncore/Storage/HC/detail/HCF-A2100.jpg"
    ],
    '1000000075': [
      "https://gdadmin-oncore53.godomall.com/data/img/oncore/Storage/HC/detail/HCF-A2200.jpg"
    ],
    '1000000076': [
      "https://gdadmin-oncore53.godomall.com/data/img/oncore/Storage/HC/detail/HCF-A5300.jpg"
    ],
    '1000000077': [
      "https://gdadmin-oncore53.godomall.com/data/img/oncore/Storage/HC/detail/HCF-A5500.jpg"
    ],
    '1000000362': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/P2_tower_gen2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/spec/P2-Tower-Gen2_spec_30JQS02G00.jpg"
    ],
    '1000000363': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/P2_tower_gen2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/spec/P2-Tower-Gen2_spec_30JQS02H00.jpg"
    ],
    '1000000365': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/P2_tower_gen2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/spec/P2-Tower-Gen2_spec_30JQS0B900.jpg"
    ],
    '1000000366': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/P3-Tiny-Gen-2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80.jpg"
    ],
    '1000000367': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/p3_ultra_g2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/P3-Ultra-Gen-2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80_30J5S08M00.jpg"
    ],
    '1000000374': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EB%8D%B0%EC%8A%A4%ED%81%AC%ED%83%91/P5%20Tower/Tinkstation_P5_01.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EB%8D%B0%EC%8A%A4%ED%81%AC%ED%83%91/P5%20Tower/Tinkstation_P5_02.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EB%8D%B0%EC%8A%A4%ED%81%AC%ED%83%91/P5%20Tower/Tinkstation_P5_03.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EB%8D%B0%EC%8A%A4%ED%81%AC%ED%83%91/P5%20Tower/Tinkstation_P5_04.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EB%8D%B0%EC%8A%A4%ED%81%AC%ED%83%91/P5%20Tower/Tinkstation_P5_05-01.jpg"
    ],
    '1000000431': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/P2_tower_gen2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/%EC%BB%B4%ED%93%A8%EC%A1%B4/30JQS02H00/2H00-64GB+4TB-5060.jpg"
    ],
    '1000000578': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/P2_tower_gen2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/%EC%BB%B4%ED%93%A8%EC%A1%B4/30JQS02H00/2H00-64GB+2TB+2TB-5060.jpg"
    ],
    '1000000579': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/P2_tower_gen2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/%EC%BB%B4%ED%93%A8%EC%A1%B4/30JQS02H00/2H00-64GB+2TB-5060.jpg"
    ],
    '1000000580': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/P2_tower_gen2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/%EC%BB%B4%ED%93%A8%EC%A1%B4/30JQS02H00/2H00-32GB+1TB+2TB-5060.jpg"
    ],
    '1000000581': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/P2_tower_gen2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/%EC%BB%B4%ED%93%A8%EC%A1%B4/30JQS02H00/2H00-32GB+1TB+1TB-5060.jpg"
    ],
    '1000000582': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/P2_tower_gen2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/%EC%BB%B4%ED%93%A8%EC%A1%B4/30JQS02H00/2H00-32GB+2TB-5060.jpg"
    ],
    '1000000583': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/P2_tower_gen2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/%EC%BB%B4%ED%93%A8%EC%A1%B4/30JQS02H00/2H00-32GB+1TB-5060.jpg"
    ],
    '1000000584': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/P2_tower_gen2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/%EC%BB%B4%ED%93%A8%EC%A1%B4/30JQS02H00/2H00-32GB+512GB+2TB-5060.jpg"
    ],
    '1000000585': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/P2_tower_gen2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/%EC%BB%B4%ED%93%A8%EC%A1%B4/30JQS02H00/2H00-32GB+512GB+1TB-5060.jpg"
    ],
    '1000000586': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/P2_tower_gen2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/%EC%BB%B4%ED%93%A8%EC%A1%B4/30JQS02H00/2H00-32GB+512GB-5060.jpg"
    ],
    '1000000587': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/P2_tower_gen2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/%EC%BB%B4%ED%93%A8%EC%A1%B4/30JQS02H00/2H00-16GB+1TB+1TB-5060.jpg"
    ],
    '1000000588': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/P2_tower_gen2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/%EC%BB%B4%ED%93%A8%EC%A1%B4/30JQS02H00/2H00-16GB+2TB-5060.jpg"
    ],
    '1000000589': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/P2_tower_gen2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/%EC%BB%B4%ED%93%A8%EC%A1%B4/30JQS02H00/2H00-16GB+1TB-5060.jpg"
    ],
    '1000000590': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/P2_tower_gen2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/%EC%BB%B4%ED%93%A8%EC%A1%B4/30JQS02H00/2H00-16GB+512GB+2TB-5060.jpg"
    ],
    '1000000591': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/P2_tower_gen2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/%EC%BB%B4%ED%93%A8%EC%A1%B4/30JQS02H00/2H00-16GB+512GB+1TB-5060.jpg"
    ],
    '1000000592': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/P2_tower_gen2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/%EC%BB%B4%ED%93%A8%EC%A1%B4/30JQS0B700/B700-64GB+4TB.jpg"
    ],
    '1000000593': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/P2_tower_gen2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/%EC%BB%B4%ED%93%A8%EC%A1%B4/30JQS0B700/B700-64GB+2TB+2TB.jpg"
    ],
    '1000000594': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/P2_tower_gen2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/%EC%BB%B4%ED%93%A8%EC%A1%B4/30JQS0B700/B700-64GB+2TB.jpg"
    ],
    '1000000595': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/P2_tower_gen2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/%EC%BB%B4%ED%93%A8%EC%A1%B4/30JQS0B700/B700-32GB+2TB+2TB.jpg"
    ],
    '1000000596': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/P2_tower_gen2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/%EC%BB%B4%ED%93%A8%EC%A1%B4/30JQS0B700/B700-32GB+2TB+1TB.jpg"
    ],
    '1000000597': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/P2_tower_gen2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/%EC%BB%B4%ED%93%A8%EC%A1%B4/30JQS0B700/B700-32GB+1TB+1TB.jpg"
    ],
    '1000000598': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/P2_tower_gen2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/%EC%BB%B4%ED%93%A8%EC%A1%B4/30JQS0B700/B700-32GB+2TB.jpg"
    ],
    '1000000599': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/P2_tower_gen2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/%EC%BB%B4%ED%93%A8%EC%A1%B4/30JQS0B700/B700-32GB+1TB.jpg"
    ],
    '1000000600': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/P2_tower_gen2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/%EC%BB%B4%ED%93%A8%EC%A1%B4/30JQS0B700/B700-32GB+512GB+2TB.jpg"
    ],
    '1000000601': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/P2_tower_gen2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/%EC%BB%B4%ED%93%A8%EC%A1%B4/30JQS0B700/B700-32GB+512GB+1TB.jpg"
    ],
    '1000000602': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/P2_tower_gen2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/%EC%BB%B4%ED%93%A8%EC%A1%B4/30JQS0B700/B700-32GB+512GB.jpg"
    ],
    '1000000603': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/P2_tower_gen2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/%EC%BB%B4%ED%93%A8%EC%A1%B4/30JQS0B700/B700-16GB+1TB+1TB.jpg"
    ],
    '1000000604': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/P2_tower_gen2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/%EC%BB%B4%ED%93%A8%EC%A1%B4/30JQS0B700/B700-16GB+2TB.jpg"
    ],
    '1000000605': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/P2_tower_gen2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/%EC%BB%B4%ED%93%A8%EC%A1%B4/30JQS0B700/B700-16GB+1TB.jpg"
    ],
    '1000000606': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/P2_tower_gen2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/%EC%BB%B4%ED%93%A8%EC%A1%B4/30JQS0B700/B700-16GB+512GB+2TB.jpg"
    ],
    '1000000607': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/P2_tower_gen2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/%EC%BB%B4%ED%93%A8%EC%A1%B4/30JQS0B700/B700-16GB+512GB+1TB.jpg"
    ],
    '1000000608': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/P2_tower_gen2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/%EC%BB%B4%ED%93%A8%EC%A1%B4/30JQS02G00/2G00-64GB+2TB+2TB.jpg"
    ],
    '1000000609': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/P2_tower_gen2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/%EC%BB%B4%ED%93%A8%EC%A1%B4/30JQS02G00/2G00-64GB+4TB.jpg"
    ],
    '1000000610': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/P2_tower_gen2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/%EC%BB%B4%ED%93%A8%EC%A1%B4/30JQS02G00/2G00-64GB+2TB.jpg"
    ],
    '1000000611': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/P2_tower_gen2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/%EC%BB%B4%ED%93%A8%EC%A1%B4/30JQS02G00/2G00-32GB+2TB+1TB.jpg"
    ],
    '1000000612': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/P2_tower_gen2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/%EC%BB%B4%ED%93%A8%EC%A1%B4/30JQS02G00/2G00-32GB+1TB+1TB.jpg"
    ],
    '1000000613': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/P2_tower_gen2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/%EC%BB%B4%ED%93%A8%EC%A1%B4/30JQS02G00/2G00-32GB+2TB.jpg"
    ],
    '1000000614': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/P2_tower_gen2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/%EC%BB%B4%ED%93%A8%EC%A1%B4/30JQS02G00/2G00-32GB+1TB.jpg"
    ],
    '1000000615': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/P2_tower_gen2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/%EC%BB%B4%ED%93%A8%EC%A1%B4/30JQS02G00/2G00-32GB+512GB+2TB.jpg"
    ],
    '1000000616': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/P2_tower_gen2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/%EC%BB%B4%ED%93%A8%EC%A1%B4/30JQS02G00/2G00-32GB+512GB+1TB.jpg"
    ],
    '1000000617': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/P2_tower_gen2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/%EC%BB%B4%ED%93%A8%EC%A1%B4/30JQS02G00/2G00-32GB+512GB.jpg"
    ],
    '1000000618': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/P2_tower_gen2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/%EC%BB%B4%ED%93%A8%EC%A1%B4/30JQS02G00/2G00-16GB+1TB+1TB.jpg"
    ],
    '1000000619': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/P2_tower_gen2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/%EC%BB%B4%ED%93%A8%EC%A1%B4/30JQS02G00/2G00-16GB+2TB.jpg"
    ],
    '1000000620': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/P2_tower_gen2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/%EC%BB%B4%ED%93%A8%EC%A1%B4/30JQS02G00/2G00-16GB+1TB.jpg"
    ],
    '1000000621': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/P2_tower_gen2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/%EC%BB%B4%ED%93%A8%EC%A1%B4/30JQS02G00/2G00-16GB+512GB+2TB.jpg"
    ],
    '1000000622': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/P2_tower_gen2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/%EC%BB%B4%ED%93%A8%EC%A1%B4/30JQS02G00/2G00-16GB+512GB+1TB.jpg"
    ],
    '1000000623': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/P2_tower_gen2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/%EC%BB%B4%ED%93%A8%EC%A1%B4/30JQS02J00/2J00-64GB+4TB.jpg"
    ],
    '1000000624': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/P2_tower_gen2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/%EC%BB%B4%ED%93%A8%EC%A1%B4/30JQS02J00/2J00-64GB+2TB+2TB.jpg"
    ],
    '1000000625': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/P2_tower_gen2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/%EC%BB%B4%ED%93%A8%EC%A1%B4/30JQS02J00/2J00-64GB+2TB.jpg"
    ],
    '1000000626': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/P2_tower_gen2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/%EC%BB%B4%ED%93%A8%EC%A1%B4/30JQS02J00/2J00-32GB+1TB+1TB.jpg"
    ],
    '1000000627': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/P2_tower_gen2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/%EC%BB%B4%ED%93%A8%EC%A1%B4/30JQS02J00/2J00-32GB+2TB.jpg"
    ],
    '1000000628': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/P2_tower_gen2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/%EC%BB%B4%ED%93%A8%EC%A1%B4/30JQS02J00/2J00-32GB+1TB.jpg"
    ],
    '1000000629': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/P2_tower_gen2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/%EC%BB%B4%ED%93%A8%EC%A1%B4/30JQS02J00/2J00-32GB+512GB+2TB.jpg"
    ],
    '1000000630': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/P2_tower_gen2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/%EC%BB%B4%ED%93%A8%EC%A1%B4/30JQS02J00/2J00-32GB+512GB+1TB.jpg"
    ],
    '1000000631': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/P2_tower_gen2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/%EC%BB%B4%ED%93%A8%EC%A1%B4/30JQS02J00/2J00-32GB+512GB.jpg"
    ],
    '1000000632': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/P2_tower_gen2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/%EC%BB%B4%ED%93%A8%EC%A1%B4/30JQS02J00/2J00-16GB+1TB+1TB.jpg"
    ],
    '1000000633': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/P2_tower_gen2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/%EC%BB%B4%ED%93%A8%EC%A1%B4/30JQS02J00/2J00-16GB+2TB.jpg"
    ],
    '1000000634': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/P2_tower_gen2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/%EC%BB%B4%ED%93%A8%EC%A1%B4/30JQS02J00/2J00-16GB+1TB.jpg"
    ],
    '1000000635': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/P2_tower_gen2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/%EC%BB%B4%ED%93%A8%EC%A1%B4/30JQS02J00/2J00-16GB+512GB+2TB.jpg"
    ],
    '1000000636': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/P2_tower_gen2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/%EC%BB%B4%ED%93%A8%EC%A1%B4/30JQS02J00/2J00-16GB+512GB+1TB.jpg"
    ],
    '1000000637': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/P2_tower_gen2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/%EC%BB%B4%ED%93%A8%EC%A1%B4/30JQS0B900/B900-64GB+4TB.jpg"
    ],
    '1000000638': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/P2_tower_gen2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/%EC%BB%B4%ED%93%A8%EC%A1%B4/30JQS0B900/B900-64GB+2TB.jpg"
    ],
    '1000000639': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/P2_tower_gen2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/%EC%BB%B4%ED%93%A8%EC%A1%B4/30JQS0B900/B900-32GB+1TB+1TB.jpg"
    ],
    '1000000640': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/P2_tower_gen2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/%EC%BB%B4%ED%93%A8%EC%A1%B4/30JQS0B900/B900-32GB+2TB.jpg"
    ],
    '1000000641': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/P2_tower_gen2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/%EC%BB%B4%ED%93%A8%EC%A1%B4/30JQS0B900/B900-32GB+1TB.jpg"
    ],
    '1000000642': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/P2_tower_gen2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/%EC%BB%B4%ED%93%A8%EC%A1%B4/30JQS0B900/B900-32GB+512GB+2TB.jpg"
    ],
    '1000000643': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/P2_tower_gen2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/%EC%BB%B4%ED%93%A8%EC%A1%B4/30JQS0B900/B900-32GB+512GB+1TB.jpg"
    ],
    '1000000644': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/P2_tower_gen2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/%EC%BB%B4%ED%93%A8%EC%A1%B4/30JQS0B900/B900-32GB+512GB.jpg"
    ],
    '1000000645': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/P2_tower_gen2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/%EC%BB%B4%ED%93%A8%EC%A1%B4/30JQS0B900/B900-16GB+1TB+1TB.jpg"
    ],
    '1000000646': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/P2_tower_gen2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/%EC%BB%B4%ED%93%A8%EC%A1%B4/30JQS0B900/B900-16GB+2TB.jpg"
    ],
    '1000000647': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/P2_tower_gen2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/%EC%BB%B4%ED%93%A8%EC%A1%B4/30JQS0B900/B900-16GB+1TB.jpg"
    ],
    '1000000648': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/P2_tower_gen2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/%EC%BB%B4%ED%93%A8%EC%A1%B4/30JQS0B900/B900-16GB+512GB+2TB.jpg"
    ],
    '1000000649': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/P2_tower_gen2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80%5B%EC%98%A8%EC%BD%94%EC%96%B4%5D.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/%EC%BB%B4%ED%93%A8%EC%A1%B4/30JQS0B900/B900-16GB+512GB+1TB.jpg"
    ],
    '1000000668': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/p3_ultra_g2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/P3%20Ultra%20Gen2/%ED%8C%8C%EC%83%9D/8M00-64GB+4TB-A400.jpg"
    ],
    '1000000669': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/p3_ultra_g2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/P3%20Ultra%20Gen2/%ED%8C%8C%EC%83%9D/8M00-64GB+2TB+2TB-A400.jpg"
    ],
    '1000000670': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/p3_ultra_g2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/P3%20Ultra%20Gen2/%ED%8C%8C%EC%83%9D/8M00-32GB+1TB+2TB-A400.jpg"
    ],
    '1000000671': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/p3_ultra_g2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/P3%20Ultra%20Gen2/%ED%8C%8C%EC%83%9D/8M00-32GB+1TB+2TB-A400.jpg"
    ],
    '1000000672': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/p3_ultra_g2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/P3%20Ultra%20Gen2/%ED%8C%8C%EC%83%9D/8M00-32GB+1TB+1TB-A400.jpg"
    ],
    '1000000673': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/p3_ultra_g2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/P3%20Ultra%20Gen2/%ED%8C%8C%EC%83%9D/8M00-32GB+2TB-A400.jpg"
    ],
    '1000000674': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/p3_ultra_g2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/P3%20Ultra%20Gen2/%ED%8C%8C%EC%83%9D/8M00-32GB+1TB-A400.jpg"
    ],
    '1000000675': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/p3_ultra_g2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/P3%20Ultra%20Gen2/%ED%8C%8C%EC%83%9D/8M00-32GB+512GB+2TB-A400.jpg"
    ],
    '1000000676': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/p3_ultra_g2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/P3%20Ultra%20Gen2/%ED%8C%8C%EC%83%9D/8M00-32GB+512GB+1TB-A400.jpg"
    ],
    '1000000677': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/p3_ultra_g2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/P3%20Ultra%20Gen2/%ED%8C%8C%EC%83%9D/8M00-32GB+512GB+W11P-A400.jpg"
    ],
    '1000000678': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/p3_ultra_g2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/P3%20Ultra%20Gen2/%ED%8C%8C%EC%83%9D/8M00-32GB+512GB-A400.jpg"
    ],
    '1000000679': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/p3_ultra_g2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/P3%20Ultra%20Gen2/%ED%8C%8C%EC%83%9D/8M00-16GB+1TB+1TB-A400.jpg"
    ],
    '1000000680': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/p3_ultra_g2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/P3%20Ultra%20Gen2/%ED%8C%8C%EC%83%9D/8M00-16GB+2TB-A400.jpg"
    ],
    '1000000681': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/p3_ultra_g2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/P3%20Ultra%20Gen2/%ED%8C%8C%EC%83%9D/8M00-16GB+1TB-A400.jpg"
    ],
    '1000000682': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/p3_ultra_g2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/P3%20Ultra%20Gen2/%ED%8C%8C%EC%83%9D/8M00-16GB+512GB+2TB-A400.jpg"
    ],
    '1000000683': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/p3_ultra_g2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/P3%20Ultra%20Gen2/%ED%8C%8C%EC%83%9D/8M00-16GB+512GB+1TB-A400.jpg"
    ],
    '1000000684': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/p3_ultra_g2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/P3%20Ultra%20Gen2/%ED%8C%8C%EC%83%9D/8M00-16GB+512GB+W11P-A400.jpg"
    ],
    '1000000685': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/p3_ultra_g2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/P3-Ultra-Gen-2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80_30J5S08M00.jpg"
    ],
    '1000000686': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/P3-Tiny-Gen-2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/P3%20Tiny%20Gen2/%ED%8C%8C%EC%83%9D/BW00-32GB+2TB+2TB.jpg"
    ],
    '1000000687': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/P3-Tiny-Gen-2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/P3%20Tiny%20Gen2/%ED%8C%8C%EC%83%9D/BW00-32GB+1TB+2TB.jpg"
    ],
    '1000000688': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/P3-Tiny-Gen-2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/P3%20Tiny%20Gen2/%ED%8C%8C%EC%83%9D/BW00-32GB+1TB+1TB.jpg"
    ],
    '1000000689': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/P3-Tiny-Gen-2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/P3%20Tiny%20Gen2/%ED%8C%8C%EC%83%9D/BW00-32GB+2TB.jpg"
    ],
    '1000000690': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/P3-Tiny-Gen-2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/P3%20Tiny%20Gen2/%ED%8C%8C%EC%83%9D/BW00-32GB+1TB.jpg"
    ],
    '1000000691': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/P3-Tiny-Gen-2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/P3%20Tiny%20Gen2/%ED%8C%8C%EC%83%9D/BW00-32GB+512GB+2TB.jpg"
    ],
    '1000000692': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/P3-Tiny-Gen-2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/P3%20Tiny%20Gen2/%ED%8C%8C%EC%83%9D/BW00-32GB+512GB+1TB.jpg"
    ],
    '1000000693': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/P3-Tiny-Gen-2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/P3%20Tiny%20Gen2/%ED%8C%8C%EC%83%9D/BW00-32GB+512GB+W11P.jpg"
    ],
    '1000000694': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/P3-Tiny-Gen-2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/P3%20Tiny%20Gen2/%ED%8C%8C%EC%83%9D/BW00-32GB+512GB.jpg"
    ],
    '1000000695': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/P3-Tiny-Gen-2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/P3%20Tiny%20Gen2/%ED%8C%8C%EC%83%9D/BW00-16GB+1TB+1TB.jpg"
    ],
    '1000000696': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/P3-Tiny-Gen-2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/P3%20Tiny%20Gen2/%ED%8C%8C%EC%83%9D/BW00-16GB+1TB.jpg"
    ],
    '1000000697': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/P3-Tiny-Gen-2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/P3%20Tiny%20Gen2/%ED%8C%8C%EC%83%9D/BW00-16GB+512GB+2TB.jpg"
    ],
    '1000000698': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/P3-Tiny-Gen-2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/P3%20Tiny%20Gen2/%ED%8C%8C%EC%83%9D/BW00-16GB+512GB+1TB.jpg"
    ],
    '1000000699': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/P3-Tiny-Gen-2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/P3%20Tiny%20Gen2/%ED%8C%8C%EC%83%9D/BW00-16GB+512GB.jpg"
    ],
    '1000000700': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/P3-Tiny-Gen-2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/P3%20Tiny%20Gen2/%ED%8C%8C%EC%83%9D/BW00-8GB+512GB-W11P.jpg"
    ],
    '1000000701': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/P3-Tiny-Gen-2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/P3-Tiny%20G2_spec_30K5S0BW00.jpg"
    ],
    '1000000702': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/Tinkstation_P5_01.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/Tinkstation_P5_02.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/Tinkstation_P5_03.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/Tinkstation_P5_04.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/Tinkstation_P5_05.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/%ED%8C%8C%EC%83%9D/Q200-64GB+512GB+2TB-2000Ada.jpg"
    ],
    '1000000703': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/Tinkstation_P5_01.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/Tinkstation_P5_02.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/Tinkstation_P5_03.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/Tinkstation_P5_04.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/Tinkstation_P5_05.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/%ED%8C%8C%EC%83%9D/Q200-64GB+512GB+2TB-A1000.jpg"
    ],
    '1000000704': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/Tinkstation_P5_01.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/Tinkstation_P5_02.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/Tinkstation_P5_03.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/Tinkstation_P5_04.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/Tinkstation_P5_05.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/%ED%8C%8C%EC%83%9D/Q200-64GB+1TB+2TB-A400.jpg"
    ],
    '1000000705': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/Tinkstation_P5_01.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/Tinkstation_P5_02.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/Tinkstation_P5_03.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/Tinkstation_P5_04.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/Tinkstation_P5_05.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/%ED%8C%8C%EC%83%9D/Q200-64GB+512GB+2TB-A400.jpg"
    ],
    '1000000706': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/Tinkstation_P5_01.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/Tinkstation_P5_02.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/Tinkstation_P5_03.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/Tinkstation_P5_04.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/Tinkstation_P5_05.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/%ED%8C%8C%EC%83%9D/Q200-32GB+512GB+2TB-2000Ada.jpg"
    ],
    '1000000707': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/Tinkstation_P5_01.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/Tinkstation_P5_02.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/Tinkstation_P5_03.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/Tinkstation_P5_04.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/Tinkstation_P5_05.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/%ED%8C%8C%EC%83%9D/Q200-32GB+512GB+2TB-A1000.jpg"
    ],
    '1000000708': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/Tinkstation_P5_01.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/Tinkstation_P5_02.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/Tinkstation_P5_03.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/Tinkstation_P5_04.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/Tinkstation_P5_05.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/%ED%8C%8C%EC%83%9D/Q200-32GB+1TB+2TB-A400.jpg"
    ],
    '1000000709': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/Tinkstation_P5_01.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/Tinkstation_P5_02.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/Tinkstation_P5_03.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/Tinkstation_P5_04.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/Tinkstation_P5_05.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/%ED%8C%8C%EC%83%9D/Q200-32GB+512GB+2TB-A400.jpg"
    ],
    '1000000710': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/Tinkstation_P5_01.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/Tinkstation_P5_02.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/Tinkstation_P5_03.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/Tinkstation_P5_04.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/Tinkstation_P5_05.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/Tinkstation_P5_06.jpg"
    ],
    '1000000713': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/30JQS0WM00/P2-Tower-Gen2-30JQS0WM00_01.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/30JQS0WM00/P2-Tower-Gen2-30JQS0WM00_03.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/Lenovo_Premier%20Support.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EB%8D%B0%EC%8A%A4%ED%81%AC%ED%83%91/P2/SPEC/P2%20Tower%20Gen2_spec_30JQS0WM00.jpg"
    ],
    '1000000714': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/30JQS0WQ00/P2-Tower-Gen2-30JQS0WQ00_01.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/30JQS0WQ00/P2-Tower-Gen2-30JQS0WQ00_03.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/Lenovo_Premier%20Support.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/spec/P2%20Tower%20Gen2_spec_30JQS0WQ00.jpg"
    ],
    '1000000715': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/30JQS0WS00/P2-Tower-Gen2-30JQS0WS00_01.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/Lenovo_Premier%20Support.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/spec/P2%20Tower%20Gen2_spec_30JQS0WS00.jpg"
    ],
    '1000000716': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/30JQS0WU00/P2-Tower-Gen2-30JQS0WU00_01.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/30JQS0WU00/P2-Tower-Gen2-30JQS0WU00_03.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/Lenovo_Premier%20Support.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/spec/P2%20Tower%20Gen2_spec_30JQS0WU00.jpg"
    ],
    '1000000717': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/P3%20Ultra%20Gen2/30J5S0BU00/P3-Ultra-Gen-2_%EC%A0%84%EC%B2%B4-%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80_01.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/P3%20Ultra%20Gen2/30J5S0BU00/P3-Ultra-Gen-2_%EC%A0%84%EC%B2%B4-%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80_02.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/P3%20Ultra%20Gen2/30J5S0BU00/P3-Ultra-Gen-2_%EC%A0%84%EC%B2%B4-%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80_03.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/Lenovo_Premier%20Support.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/P3%20Ultra%20Gen2/30J5S0BU00/P3%20Ultra%20Gen%202_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80_30J5S0BU00.jpg"
    ],
    '1000000718': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/P3%20Tiny%20Gen2/30K5S0KA00/P3-Tiny-G2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80_01.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/P3%20Tiny%20Gen2/30K5S0KA00/P3-Tiny-G2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80_02.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/P3%20Tiny%20Gen2/30K5S0KA00/P3-Tiny-G2_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80_03.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P2%20TWR%20Gen2/Lenovo_Premier%20Support.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P3%20TWR%20Gen2/P3%20Tiny%20Gen2/30K5S0KA00/P3-Tiny-G2_spec_30K5S0KA00.jpg"
    ],
    '1000000719': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/Gen2/30KBS02L00/Lenovo-PDP_ThinkStation-P5-Gen-2_30KBS02L00_01.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/Gen2/30KBS02L00/Lenovo-PDP_ThinkStation-P5-Gen-2_30KBS02L00_02.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/Gen2/30KBS02L00/Lenovo-PDP_ThinkStation-P5-Gen-2_30KBS02L00_03.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/Gen2/30KBS02L00/Tinkstation_P5_30KBS02L00.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/Gen2/30KBS02L00/Lenovo-PDP_ThinkStation-P5-Gen-2_30KBS02L00_05.jpg"
    ],
    '1000000720': [
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/ONCORE-Partner-Banner.gif",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/Gen2/30KBS02H00/Lenovo-PDP_ThinkStation-P5-Gen-2_30KBS02H00_01.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/Gen2/30KBS02H00/Lenovo-PDP_ThinkStation-P5-Gen-2_30KBS02H00_02.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/Gen2/30KBS02H00/Lenovo-PDP_ThinkStation-P5-Gen-2_30KBS02H00_03.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/Gen2/30KBS02H00/Tinkstation_P5_30KBS02H00.jpg",
      "https://itketweb.hgodo.com/data/img/%EC%98%A8%EC%BD%94%EC%96%B4/lenovo/%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98/ThinkStation%20P5%20TWR%20Gen2/Gen2/30KBS02H00/Lenovo-PDP_ThinkStation-P5-Gen-2_30KBS02H00_05.jpg"
    ]
  };

  window.OC_MOCK = { GOODS: GOODS, DISPLAYS: DISPLAYS, DESC: DESC, li: li, money: money };

  Array.prototype.forEach.call(document.querySelectorAll('[data-display]'), function (box) {
    var list = DISPLAYS[box.getAttribute('data-display')] || [];
    // 자리 이름표(스킨 oncore.js labelCardLists 와 같은 이름): 추천 제품 탭 = best-{탭}, 조달안내 = g2b, 그 밖 진열 = display
    var sec = box.closest('section[id]'), where = sec && sec.id === 'oc-best' ? 'best-' + box.getAttribute('data-panel') : sec && sec.id === 'oc-g2b' ? 'g2b' : 'display';
    box.innerHTML = '<ul class="oc-cards oc-cards--' + where + '">' + list.map(li).join('') + '</ul>';
  });
})();
