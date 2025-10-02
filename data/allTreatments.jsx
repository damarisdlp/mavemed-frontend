// data/allTreatments.js
import { botox } from './treatments/wrinkleReducers/botox';
import { hydrafacial} from './treatments/facials/hydrafacial/hydrafacial';
import { casmaraPurifying } from './treatments/facials/casmara/purifying';
import { casmaraInfinity } from './treatments/facials/casmara/infinity';
import { casmaraRetinolProAge } from './treatments/facials/casmara/retinol';
import { janssenRadianceBoost } from './treatments/facials/janssen/radiance'
import { janssenUltraRenewal } from './treatments/facials/janssen/ultra';
import { cupping } from './treatments/bodyTreatments/cupping';
import { keloidInjection } from './treatments/bodyTreatments/keloidScar';
import { sclerotherapy } from './treatments/bodyTreatments/sclerotherapy';

export const allTreatments = [
    botox, 
    hydrafacial, 
    casmaraPurifying, 
    casmaraInfinity, 
    casmaraRetinolProAge,
    janssenRadianceBoost,
    janssenUltraRenewal,
    cupping,
    keloidInjection,
    sclerotherapy
];