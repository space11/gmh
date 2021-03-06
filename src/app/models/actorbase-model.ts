/**
 * Base Actor shape
 */
export interface ActorbaseModel {
    /** Actor Name */
    name: string;

    /** Actor Initiative */
    initiative: number;

    /** Base value of Luck points */
    baseLuckPoints?: number;

    /** Luck point uses by actor */
    luckPointsSpent: number;

    /** Wounds */
    wounds: number;

    /** Base wounds */
    baseWounds?: number;
}
