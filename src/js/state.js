
const sceneVisits = Object.create(null);

export function recordSceneVisit(sceneId) {
    sceneVisits[sceneId] = (sceneVisits[sceneId] || 0) + 1;

    return sceneVisits[sceneId];
}

export function getSceneVisits(sceneId) {
    return sceneVisits[sceneId] || 0;
}