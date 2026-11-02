const sceneVisits = Object.create(null);
const objectVisits = Object.create(null);

export function recordSceneVisit(sceneId) {
    sceneVisits[sceneId] = (sceneVisits[sceneId] || 0) + 1;
    return sceneVisits[sceneId];
}

export function getSceneVisits(sceneId) {
    return sceneVisits[sceneId] || 0;
}

export function recordObjectVisit(objectId) {
    objectVisits[objectId] = (objectVisits[objectId] || 0) + 1;
    return objectVisits[objectId];
}

export function getObjectVisits(objectId) {
    return objectVisits[objectId] || 0;
}