import * as React from 'react';
import { Step } from './Step';
import { Wrapper } from './Wrapper';
export const TourGuideZone = ({ isTourGuide = true, tourKey = '_default', zone, children, shape, text, maskOffset, borderRadius, style, keepTooltipPosition, tooltipBottomOffset, borderRadiusObject, name, tooltipArrowPosition = 'topLeft', onZonePress, tooltipStyleOverride, }) => {
    if (!isTourGuide) {
        return React.createElement(React.Fragment, null, children);
    }
    return (React.createElement(Step, { text: text !== null && text !== void 0 ? text : `Zone ${zone}`, order: zone, name: name !== null && name !== void 0 ? name : `${zone}`, ...{
            tourKey,
            shape,
            maskOffset,
            borderRadius,
            keepTooltipPosition,
            tooltipBottomOffset,
            borderRadiusObject,
            tooltipArrowPosition,
            onZonePress,
            tooltipStyleOverride,
        } },
        React.createElement(Wrapper, { ...{ style } }, children)));
};
