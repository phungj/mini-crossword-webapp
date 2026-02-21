"use client";

if (typeof window !== "undefined" && !window.__LOCAL_STORAGE_PATCHED__) {
    window.__LOCAL_STORAGE_PATCHED__ = true;

    const originalSetItem = Storage.prototype.setItem;

    Storage.prototype.setItem = function (key, value) {
        originalSetItem.call(this, key, value);
        window.dispatchEvent(
            new CustomEvent("localStorageSetItem", { detail: { key, value } })
        );
    };
}