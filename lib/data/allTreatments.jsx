// data/allTreatments.js
import { botox } from './treatments/wrinkleReducers/botox';
import { dermawrinkle } from './treatments/wrinkleReducers/dermawrinkle';
import { hydrafacial} from './treatments/facials/hydrafacial/hydrafacial';
import { casmaraPurifying } from './treatments/facials/casmara/purifying';
import { casmaraInfinity } from './treatments/facials/casmara/infinity';
import { casmaraRetinolProAge } from './treatments/facials/casmara/retinol';
import { janssenRadianceBoost } from './treatments/facials/janssen/radiance'
import { janssenUltraRenewal } from './treatments/facials/janssen/ultra';
import { cupping } from './treatments/bodyTreatments/cupping';
import { keloidInjection } from './treatments/bodyTreatments/keloidScar';
import { sclerotherapy } from './treatments/bodyTreatments/sclerotherapy';
import { wartRemoval } from './treatments/bodyTreatments/wartRemoval';
import { swedishMassage } from './treatments/bodyTreatments/swedishMassage';
import { harmonyca } from './treatments/collagenBiostimulators/harmonyCa';
import { sculptra } from './treatments/collagenBiostimulators/sculptra';
import { facialBalancing } from './treatments/dermalFillers/facialBalancing';
import { lipFillers } from './treatments/dermalFillers/lipFillers';
import { hyaluronidase } from './treatments/dermalFillers/hyaluronidase';
import { co2Laser } from './treatments/laserTreatments/co2Laser';
import { laserHairRemoval } from './treatments/laserTreatments/hairRemoval';
import { ipl } from './treatments/laserTreatments/ipl';
import { rfMicroneedling } from './treatments/laserTreatments/rfMicroneedling';
import { microneedling } from './treatments/microneedling/microneedling';
import { mesotherapy } from './treatments/microneedling/mesotherapy';
import { calcanealSpur } from './treatments/podiatry/heelSpur';
import { matrixectomy } from './treatments/podiatry/ingrownToenail';
import { nailFungusLaser } from './treatments/podiatry/laserNail';
import { toenailExtraction } from './treatments/podiatry/nailExtraction';
import { enzymaticTherapy } from './treatments/skinTightSculpt/enzymaticRemodeling';
import { pdoThreads } from './treatments/skinTightSculpt/pdoThreads';
import { venusFreeze } from './treatments/skinTightSculpt/rfSculpting';
import { ultraformerMPT } from './treatments/skinTightSculpt/ultraformerMPT';
import { serumAddOns } from './treatments/laserTreatments/faceAddOn';

export const allTreatments = [
    botox,
    dermawrinkle,
    harmonyca,
    sculptra,
    co2Laser,
    laserHairRemoval,
    ipl,
    rfMicroneedling,
    microneedling,
    mesotherapy, 
    hydrafacial, 
    casmaraPurifying, 
    casmaraInfinity, 
    casmaraRetinolProAge,
    janssenRadianceBoost,
    janssenUltraRenewal,
    facialBalancing,
    lipFillers,
    hyaluronidase,
    enzymaticTherapy,
    pdoThreads,
    venusFreeze,
    ultraformerMPT,
    cupping,
    keloidInjection,
    sclerotherapy,
    wartRemoval,
    swedishMassage,
    calcanealSpur,
    matrixectomy,
    nailFungusLaser,
    toenailExtraction,
    serumAddOns
];